import React, {useState, useEffect} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import NavbarApp from "../navbar/Navbar"

const LogIn = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/add')
        }
    })

   

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            
            alert(res.data.message)
            localStorage.setItem('user-info',user)
            navigate("/add")
           // setLoginUser(res.data.user)
           
        })
    }

    return (
        <>
        <NavbarApp />
        <div className="login">
            <h1>LogIn Page</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>LogIn</div>
            <div>or</div>
            <div className="button" onClick={() => navigate.push("/register")}>Register</div>
        </div>
    </>
    )
}

export default LogIn;