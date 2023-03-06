import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../Login/Login.scss"
const Signup = () => {


    const [SignupForm, setSignupForm] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    })

    const handleChange = (e, name) => {
        setSignupForm({ ...SignupForm, [name]: e.target.value })
    }


    return (
        <div className='login' >
            <div className="login-thumbnail">
                <img alt="login" className='login-thumbnail-img men' src={require('../../img/login-img.png')} />
                <img alt="login" className='login-thumbnail-img women' src={require('../../img/login-img-women.png')} />
                <p className='login-thumbnail-typo' >
                    All progress takes
                    place outside the
                    comfort zone </p>
            </div>
            <div className="login-form-wrapper">

                <h1 className='login-form-label' >Welcome</h1>

                <div className="login-form-content">
                    <label>First Name</label>
                    <input className="form-control" onChange={(e) => { handleChange(e, "firstName") }} placeholder='First Name' />
                </div>
                <div className="login-form-content">
                    <label>Last Name</label>
                    <input className="form-control" onChange={(e) => { handleChange(e, "lastName") }} placeholder='Last Name' />
                </div>

                <div className="login-form-content">
                    <label>Email</label>
                    <input className="form-control" onChange={(e) => { handleChange(e, "email") }} placeholder='Email' />
                </div>

                <div className="login-form-content">
                    <label>Password </label>
                    <input className="form-control" onChange={(e) => { handleChange(e, "password") }} type="password" placeholder='Password' />
                    <label>if you already have an account <b>login</b></label>
                </div>

                {/* <Link to="/login" className="login-form-btn">
                    Signup
                </Link> */}
            </div>
        </div>
    )
}

export default Signup