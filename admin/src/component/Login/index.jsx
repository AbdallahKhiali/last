import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import Loading from '../utils/Loading'
import "./Login.scss"
const Login = () => {
    const { setIsAuth, setLoading, loading } = useContext(Context)

    const baseURI = "http://localhost:3004/api/v1"

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e, name) => {
        setLoginForm({ ...loginForm, [name]: e.target.value })
    }

    const login = () => {
        axios.post(`${baseURI}/users/login`, loginForm)
            .then((res) => {
                try {
                    if (res.data.user.role === "admin") {
                        localStorage.setItem('token', JSON.stringify(res.data.token))
                        localStorage.setItem('role', JSON.stringify(res.data.user.role))
                        sessionStorage.setItem('auth', true)
                        setLoading(false)
                    }
                }catch{
                    console.log("you are not allowed to login")
                }
            }).catch((err) => {
                    console.log(err);
                    setLoading(false);
                })
    }


    return (
        <div className='login' >
            {
                loading && <Loading />
            }
            <div className="login-form-wrapper">
                <h1 className='login-form-label' >Welcome</h1>
                <div className="login-form-content">
                    <label>Email</label>
                    <input className="form-control" onChange={(e) => { handleChange(e, "email") }} placeholder='Email' />
                </div>

                <div className="login-form-content">
                    <label>Password </label>
                    <input className="form-control" onChange={(e) => { handleChange(e, "password") }} type="password" placeholder='Password' />
                    {/* <label>if you don't have an account <b>singup</b></label> */}
                </div>

                <div onClick={() => { setLoading(true); login() }} className="login-form-btn">
                    login
                </div>
            </div>
        </div>
    )
}

export default Login