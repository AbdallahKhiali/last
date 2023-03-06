import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "../../style/page.scss"
import ModalUser from '../utils/ModalUser'
// import Modal from '../utils/Modal'
const User = () => {
    const [users, setUsers] = useState([])
    const [userDetails, setUserDetails] = useState(null)
    const [modal, setModal] = useState(false)



    const { axiosConfig, currentUser, setCurrentUser } = useContext(Context)

    const baseURI = "http://localhost:3004/api/v1"

    useEffect(() => {
        axios.get(`${baseURI}/users`, axiosConfig).then((res) => {
            setUsers(res.data);
        }).catch((err) => { console.log(err) })
    }, [users])

    const deleteuser = (role, id) => {
        if (role === 'admin') {
            alert("you can't delete admin")
        } else {
            axios.delete(`${baseURI}/users/${id}`, axiosConfig).then((res) => {
                window.location.replace("/admin/user")
            }).catch((err) => { console.log(err) })
        }

    }


    return (
        <div className='page' >
            {
                modal && <ModalUser setModal={setModal} userDetails={userDetails} />
            }
            <p className='page_label'>USERS</p>
            <a href="/admin/user/create" className="add_button">+</a>
            <table className="table table-dark table-hover ">
                <thead >
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">role</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(({ _id, firstname, lastname, email, password, role, accountFor }, i) => {
                            return (
                                <tr key={i} >
                                    <th scope="row">{_id}</th>
                                    <td  >{firstname}</td>
                                    <td  >{lastname}</td>
                                    <td  >{email}</td>
                                    <td  >{role}</td>
                                    <td  >
                                        <Link to={`/admin/user/update/${_id}`} type="button" className="btn btn-primary mx-1" onClick={() => { setCurrentUser({ _id, firstname, lastname, email, accountFor }) }}   >update</Link>
                                        <button type="button" className="btn btn-info mx-1" onClick={() => { setUserDetails({ _id, firstname, lastname, email, password, role, accountFor }); setModal(true) }}>details</button>
                                        <button type="button" className="btn btn-danger mx-1" onClick={() => { deleteuser(role, _id) }}  >delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default User