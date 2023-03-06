import React from 'react'
import "./utils.scss"
const Button = ({ text, action, link, color }) => {
    return (
        (link) ?
            <a href={link} className={`primary-button  `} onClick={action} >{text}</a>
            :
            <div style={color ? { backgroundColor: `${color}` } : {}} className={`primary-button  `} onClick={action} >{text}</div>
    )
}

export default Button