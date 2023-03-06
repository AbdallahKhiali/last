import React from 'react'
import Button from '../utils/Button'
import "./style.scss"
const Error = () => {
    return (
        <div className='error' >
            <img src={require('../../img/black-logo.png')} alt="logo" />
            <h1>
                ERROR !
            </h1>
            <Button text="HOME" link="/" />
        </div>
    )
}

export default Error