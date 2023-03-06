import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.scss"
const Sidebar = () => {
    const disconnect = () => {
        // localStorage.removeItem('token')
        // localStorage.removeItem('role')
        // sessionStorage.setItem('auth', false)

        localStorage.clear()
        sessionStorage.clear()
        window.location.reload()
    }
    return (
        <aside className='sidebar ' >
            <div className="sidebar_logo">
                <img src={require('../../assets/logo.png')} alt="sidebar_logo" />
            </div>
            <ul>
                <li>
                    <Link to="/admin/user">user</Link>
                </li>
                <li>
                    <Link to="/admin/product">Products</Link>
                </li>
                <li>
                    <Link to="/admin/command">Commands</Link>
                </li>
                <li>
                    <Link to="/admin/video">Videos</Link>
                </li>
                {/* <li>
                    <Link to="/admin/pack">Packs</Link>
                </li> */}
                <li className='button_container'>
                    <div className='log_btn' onClick={() => { disconnect() }}  >LOGOUT</div>
                </li>

            </ul>


        </aside>
    )
}

export default Sidebar