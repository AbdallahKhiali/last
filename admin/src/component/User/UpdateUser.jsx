import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import "../../style/page.scss"
const UpdateUser = () => {

    const { id } = useParams()

    const { axiosConfig, currentUser, setCurrentUser } = useContext(Context)

    const baseURI = "http://localhost:3004/api/v1"



    const onInputChange = (e, fieldName) => {
        setCurrentUser({ ...currentUser, [fieldName]: e.target.value })
    }


    const updateUser = () => {
        console.log(currentUser + 'currentUser')
        axios.put(`${baseURI}/users/${id}`, currentUser, axiosConfig).then((res) => {
            setCurrentUser(res.data)
        }).catch((err) => { console.log(err) })


    }




    return (
        <div className='page' >
            <p className='page_label'>Update User</p>
            <div className="col-md-12  ">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" value={currentUser?.firstname} className="form-control" onChange={(e) => onInputChange(e, 'firstname')} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={currentUser?.lastname} onChange={(e) => onInputChange(e, 'lastname')} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Account For</label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' value={currentUser?.accountFor} onChange={(e) => onInputChange(e, 'accountFor')} >
                            <option className='h-100 w-100 ps-3 ' value="men" >Men</option>
                            <option className='h-100 w-100 ps-3 ' value="women" >Women</option>
                        </select>
                    </div>
                </div>



                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={currentUser?.email} onChange={(e) => onInputChange(e, 'email')} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="w-100 ">
                        <button className='btn  btn-dark w-100 ' onClick={() => { updateUser() }} >submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateUser