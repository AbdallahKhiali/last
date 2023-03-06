import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "../../style/page.scss"
import ModalVideo from '../utils/ModalVideo'
// import Modal from '../utils/Modal'
const Video = () => {
    const [videos, setVideos] = useState([])
    const [videoDetails, setVideoDetails] = useState(null)
    const [modal, setModal] = useState(false)
    const { axiosConfig } = useContext(Context)
    const baseURI = "http://localhost:3004/api/v1"
    useEffect(() => {
        axios.get(`${baseURI}/video/all`, axiosConfig).then((res) => {
            setVideos(res.data);
            // console.log(res.data)
        }).catch((err) => { console.log(err) })
    }, [videos])



    const deletevideo = (id) => {
        axios.delete(`${baseURI}/video/${id}`, axiosConfig).then((res) => {
            console.log("video deleted")
        }).catch((err) => { console.log(err) })
    }


    return (
        <div className='page' >
            {
                modal && <ModalVideo setModal={setModal} videoDetails={videoDetails} />
            }
            <p className='page_label'>Videos</p>
            <a href="/admin/video/create" className="add_button">+</a>
            <table className="table table-dark table-hover ">
                <thead >
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col">link</th>
                        <th scope="col">picture</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        videos?.map(({ _id, title, link, image, videoFor }, i) => {
                            return (
                                <tr key={i} >
                                    <td  >{title}</td>
                                    <td  >{link}</td>
                                    <td  >
                                        <img src={`${baseURI}/${image}`} height={100} width={100} />
                                    </td>
                                    <td  >
                                        <Link to={`/admin/video/update/${_id}`} type="button" className="btn btn-primary mx-1">update</Link>
                                        <button type="button" className="btn btn-info mx-1" onClick={() => { setVideoDetails({ _id, title, link, image, videoFor }); setModal(true) }}>details</button>
                                        <button type="button" className="btn btn-danger mx-1" onClick={() => deletevideo(_id)}  >delete</button>
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

export default Video