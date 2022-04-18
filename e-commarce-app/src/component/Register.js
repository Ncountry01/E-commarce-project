import React, { useState, useEffect } from "react"
import "./register.css"
import axios from "axios"
import NavbarApp from "../navbar/Navbar"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    })

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                localStorage.setItem("user-info", JSON.stringify(user))
                navigate("/add")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return ( 
        <>
        <NavbarApp />
        <div className="register">
            {console.log("User", user)}
            <h1>SignUp Page</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >SignUp</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
    </>
    )
}

export default SignUp;