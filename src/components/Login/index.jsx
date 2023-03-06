import React from 'react'
import { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import Header from '../Header/Header'
import Loading from '../Loading'
import "./Login.scss"
const Login = () => {

    const { loading, setLoading, login, loginForm, setLoginForm } = useContext(GeneralContext)


    const handleChange = (e, name) => {
        setLoginForm({ ...loginForm, [name]: e.target.value })
    }


    return (
        <div className='login' >

            <div className="header-container">
                <Header />
            </div>
            <div className="login-thumbnail" />
            <div className="login-form-wrapper">
                {loading && <Loading />}
                <img className="login-form-logo" alt='login-form-logo' height={75} src={require('../../img/login_logo.svg').default} />
                <h3 className='login-form-label' >Welcome</h3>

                <div className="login-form-content">
                    <label>User ID</label>
                    <div className='form-input_container' >
                        <img alt="login-form" src={require("../../img/login_id.svg").default} height={24} />
                        <input className="form-control" onChange={(e) => { handleChange(e, "email") }} placeholder='Enter your ID' />
                    </div>
                </div>

                <div className="login-form-content">
                    <label>Password </label>
                    <div className='form-input_container' >
                        <img  alt="login-form" src={require("../../img/login_pw.svg").default} height={24} />
                        <input className="form-control" onChange={(e) => { handleChange(e, "password") }} type="password" placeholder='Password' />
                    </div>
                </div>

                <div onClick={() => { setLoading(true); login() }} className="login-form-btn">
                    <span>Log in</span>
                    <img alt="login-form" src={require('../../img/yellow_arrows.svg').default} height={16} />
                </div>
            </div>
        </div>
    )
}

export default Login