import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import "../../style/page.scss"
const UpdateVideo = () => {


    const [currentVideo, setCurrentVideo] = useState()
    const { axiosConfig } = useContext(Context)

    const baseURI = "http://localhost:3004/api/v1"


    const onInputChange = (e, fieldName) => {
        setCurrentVideo({ ...currentVideo, [fieldName]: e.target.value })
    }

    const { id } = useParams()



    useEffect(() => {
        axios.get(`${baseURI}/video/${id}`, axiosConfig).then(res => {
            setCurrentVideo(res.data)
        }).catch((err) => { console.log(err) })
    }, [])

    const updatevideo = () => {
        axios.put(`${baseURI}/video/${id}`, currentVideo, axiosConfig).then((res) => {
            // console.log("update video working :", res.data)
            window.location.replace('/admin/video')
        }).catch((err) => { console.log(err) })
    }


    return (
        <div className='page' >
            <p className='page_label'>Update Video</p>
            <div className="col-md-12 ">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">title</label>
                    <div className="col-sm-10">
                        <input type="text" value={currentVideo?.title} onChange={(e) => onInputChange(e, 'title')} className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">link</label>
                    <div className="col-sm-10">
                        <input type="text" value={currentVideo?.link} onChange={(e) => onInputChange(e, 'link')} className="form-control" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">program</label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' value={currentVideo?.videoFor} onChange={(e) => onInputChange(e, 'videoFor')} >
                            <option className='h-100 w-100 ps-3 ' value="men" >Men</option>
                            <option className='h-100 w-100 ps-3 ' value="women" >Women</option>
                        </select>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="w-100 ">
                        <button className='btn  btn-dark w-100 ' onClick={() => { updatevideo() }} >submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdateVideo