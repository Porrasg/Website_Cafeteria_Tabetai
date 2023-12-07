import { useRef, useEffect } from "react"
import './Login.css'
import { jwtDecode } from "jwt-decode";

const Login = ({setCurrUser}) =>{
    const formRef=useRef()
    const login=async (userInfo, setCurrUser)=>{
        const url="http://localhost:3001/login"
        try{
            const response=await fetch(url, {
                method: "post",
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(userInfo)
            })
            const data=await response.json()
            if(!response.ok) 
            throw data.error
            localStorage.setItem("token", response.headers.get("Authorization"))
            setCurrUser(data)        
        }catch(error){
        console.log("error", error)
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{ email: data.email, password: data.password }
        }
        login(userInfo, setCurrUser)
        e.target.reset()
    }
    
    useEffect(() => {         
        const token = localStorage.getItem("token"); // Retrieve the token from localStorage
        if (token) {             
            const decoded = jwtDecode(token);             
            const userId = decoded.sub;             
            fetch("http://localhost:3001/login", {                 
                headers: {                     
                    "content-type": "application/json",                     
                    "authorization": localStorage.getItem("token"),                 
                }                 
            }).then(response => response.json()).then(data => {                     
                setCurrUser(data);                 
            }).catch(error => {                     
                console.error('Error:', error);                 
            });         
        }     
    }, []);

    return(
        <div className="container_register">
            <div className="registration">
                <form className="form-login" ref={formRef} onSubmit={handleSubmit}>
                    <input className="input-login" type="email" name='email' placeholder="email" />
                    <br/>
                    <input className="input-login" type="password" name='password' placeholder="password" />
                    <br/>
                    <input className='enviar' type='submit' value="Login" />
                </form>
                <br />
                <div className="div-register">
                    Ir a la pagina de <a  className='iniciolink' href="/">Inicio</a>
                </div> 
            </div>
        
        </div>
    )
}
export default Login