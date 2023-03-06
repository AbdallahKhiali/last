import React from 'react'
import "./utils.scss"
const ThirdlyButton = ({ text, action, color }) => {
    return (
        <div onClick={action} style={color ? { backgroundColor: `${color}` } : {}} className='third_button'>
            {text}
        </div>
    )
}

export default ThirdlyButton