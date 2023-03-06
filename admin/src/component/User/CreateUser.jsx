import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import "../../style/page.scss"
import Loading from '../utils/Loading';
const Create = () => {

    const { axiosConfig, loading, setLoading } = useContext(Context)

    const [userForm, setUserForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        role: "admin",
        accountFor: "men"
    })

    const baseURI = "http://localhost:3004/api/v1"

    // console.log(userForm)


    const createUser = () => {
        axios.post(`${baseURI}/users/users`, userForm, axiosConfig).then((data) => { setLoading(false); window.location.reload() }).catch((err) => { console.log(err) })
    }



    const onInputChange = (e, fieldName) => {
        setUserForm({ ...userForm, [fieldName]: e.target.value })
    }



    return (
        <div className='page' >
            <p className='page_label'>Create User</p>
            {
                loading && <Loading />
            }
            <div className="col-md-12  ">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => onInputChange(e, 'firstname')} className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" onChange={(e) => onInputChange(e, 'lastname')} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" onChange={(e) => onInputChange(e, 'password')} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" onChange={(e) => onInputChange(e, 'email')} className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Role</label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' onChange={(e) => onInputChange(e, 'role')} >
                            <option className='h-100 w-100 ps-3 ' value="admin" >Admin</option>
                            <option className='h-100 w-100 ps-3 ' value="viewer" >Viewer</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">The user is a : </label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' onChange={(e) => onInputChange(e, 'accountFor')} >
                            <option className='h-100 w-100 ps-3 ' value="men" >Men</option>
                            <option className='h-100 w-100 ps-3 ' value="women" >Women</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="w-100 ">
                        <button onClick={() => { setLoading(true); createUser() }} className='btn  btn-dark w-100 ' >submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create