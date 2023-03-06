import React from 'react'
import { Link } from 'react-router-dom'
import "./Thanks.scss"
const Thanks = () => {
    return (
        <div className='thanks' >
            <img  src={require('../../img/login_logo.svg').default} height={64} alt="logo-l" />
            <img  src={require('../../img/thank_heart.svg').default} height={36} alt="logo-h" />
            <h1>
                Thank you for purchasing
                our PROGRAM
            </h1>
            <p>
                You will receive an email or phone call from our bodyetic team to confirm your shipping
            </p>
            <Link to="/" >
                <span>      Go Home Page            </span>
                <img alt='arrow' src={require('../../img/arrows.png')} height={16} />
            </Link>
        </div>
    )
}

export default Thanks