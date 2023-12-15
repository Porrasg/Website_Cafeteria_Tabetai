import { useRef, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import './Login.css';

const Login = ({ setCurrUser }) => {
  const formRef = useRef();
  const [error, setError] = useState(null);

  const login = async (userInfo) => {
    const url = "http://localhost:3001/login";
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Inicio de sesión fallido");
      }

      localStorage.setItem("token", response.headers.get("Authorization"));
      setCurrUser(data);
      setError(null);
    } catch (error) {
      console.error("Error de inicio de sesión:", error.message);
      setError("El correo electrónico o la contraseña son incorrectos");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        const expirationTime = decoded.exp * 1000;
        const currentTime = Date.now();

        if (currentTime > expirationTime) {
          localStorage.removeItem("token");
          return;
        }

        fetch("http://localhost:3001/login", {
          headers: {
            "content-type": "application/json",
            "authorization": localStorage.getItem("token"),
          },
        })
          .then(response => response.json())
          .then(data => {
            setCurrUser(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } catch (error) {
        console.error("Error decodificando el token:", error);
      }
    }
  }, [setCurrUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password },
    };
    login(userInfo);
    e.target.reset();
  };

  return (
    <div className="container_register">
      <div className="registration">
        {error && <div className="error-message">{error}</div>}
        <form className="form-login" ref={formRef} onSubmit={handleSubmit}>
          <input className="input-login" type="email" name="email" placeholder="Correo electrónico" />
          <br />
          <input className="input-login" type="password" name="password" placeholder="Contraseña" />
          <br />
          <input className="enviar" type="submit" value="Iniciar sesión" />
        </form>
        <br />
        <div className="div-register">
          Ir a la página de <a className="iniciolink" href="/">Inicio</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
