import React from 'react'
import "./utils.scss"
const NextPageButton = ({ number, action }) => {
    return (
        <div onClick={action} className='next_page_btn' >
            {number}
        </div>
    )
}

export default NextPageButton