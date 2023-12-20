import { useRef } from "react"
import './Signup.css';

const Signup=({setCurrUser, setShow})=>{
    const formRef = useRef()
    const signup=async (userInfo, setCurrUser)=>{
        const url="http://localhost:3001/signup"
        try{
            const response=await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            }) 
            const data=await response.json()
            if(!response.ok) throw data.error
            localStorage.setItem('token', response.headers.get("Authorization"))
            setCurrUser(data)
        } catch (error){
            console.log("error", error)
        }
    }
    const handleSubmit=e=>{
        e.preventDefault()
        const formData=new FormData(formRef.current)
        const data=Object.fromEntries(formData)
        const userInfo={
            "user":{ email: data.email, password: data.password, name: data.name }
        }
        signup(userInfo, setCurrUser)
        e.target.reset()
    }
    
    return(
        <div>
            <div className='container_form'>
                <div className='addadminn'>
                    <form className="form-admin" ref={formRef} onSubmit={handleSubmit}>
                        Email: <input type="email" name='email'/>
                        <br/>
                        Password: <input type="password" name='password'/>
                        <br/>
                        Name: <input type="name" name='name'/>
                        <br/>
                        <input className="enviar" type='submit' value="Submit" />
                    </form>
                    <div>
                        <a href="/admins_vistas" className="boton_admins">Ver todos los administradores</a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signup