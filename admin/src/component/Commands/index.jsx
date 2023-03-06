import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "../../style/page.scss"
import CommandModal from '../utils/ModalCommand'
// import Modal from '../utils/Modal'
const Command = () => {
    const [commands, setCommands] = useState([])
    const [commandsDetails, setCommandDetails] = useState(null)
    const [modal, setModal] = useState(false)

    const { axiosConfig } = useContext(Context)
    // console.log("commands :", commands)

    const baseURI = "http://localhost:3004/api/v1"


    useEffect(() => {
        axios.get(`${baseURI}/users/command/all`, axiosConfig).then((res) => {
            // console.log(res.data)
            setCommands(res.data);
        }).catch((err) => { console.log(err) })
    }, [commands])

    const deletecommand = (id) => {
        axios.delete(`${baseURI}/users/command/delete/${id}`, axiosConfig).then((res) => {
            console.log("command deleted")
            window.location.reload()
        }).catch((err) => { console.log(err) })
    }


    return (
        <div className='page' >
            {
                modal && <CommandModal commandsDetails={commandsDetails} setModal={setModal} />
            }
            <p className='page_label'>Commands</p>
            <table className="table table-dark table-hover ">
                <thead >
                    <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">USER's Name</th>
                        <th scope="col">USER's Email </th>
                        <th scope="col">User's Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        // commands && commands?.map((e, i) => {
                        // console.log(e)
                        commands && commands?.map(({ _id, commune, wilaya, adresse, lastName, firstName, phoneNumber, email, products, age, height, weight, sickness, sleepTime, wakeTime, job, timeSpentWorking, maritalStatus, blood, gender }, i) => {
                            // console.log({ _id, lastName, firstName, phoneNumber, email, products })
                            return (
                                <tr key={i} >
                                    {/* <th scope="row">{_id}</th> */}
                                    <td  >{firstName} {lastName}</td>
                                    <td  >{email}</td>
                                    <td  >{phoneNumber}</td>
                                    <td  >
                                        <button type="button" className="btn btn-info mx-1" onClick={() => { setCommandDetails({ _id, commune, wilaya, adresse, lastName, firstName, phoneNumber, email, products, age, height, weight, sickness, sleepTime, wakeTime, job, timeSpentWorking, maritalStatus, blood, gender }); setModal(true) }}>details</button>
                                        <button type="button" className="btn btn-danger mx-1" onClick={() => deletecommand(_id)}  >delete</button>
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

export default Command