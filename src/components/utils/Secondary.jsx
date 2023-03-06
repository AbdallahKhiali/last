import React from 'react'
import "./utils.scss"
const Secondary = ({ text, children, action, color, link }) => {
    return (
        <div className='secondary-button buy_details ' onClick={action} >
            {children}
        </div>
    )
}

export default Secondary