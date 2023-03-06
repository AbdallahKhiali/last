import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import "../../style/page.scss"
import Loading from '../utils/Loading'
const CreateٍVideo = () => {
    const [video, setVideo] = useState("")
    // const [url, setUrl] = useState()
    const [videoForm, setVideoForm] = useState({
        title: "",
        link: "",
        // picture: "",
        videoFor: "men",
    })

    const token = JSON.parse(localStorage.getItem('token'))
    const [image, setImage] = useState([]);


    const baseURI = "http://localhost:3004/api/v1"


    const { axiosConfig, loading, setLoading } = useContext(Context)


    const postDetails = async () => {

        const formData = new FormData();

        formData.append('image', image);
        formData.append('title', videoForm.title);
        formData.append('link', videoForm.link);
        formData.append('videoFor', videoForm.videoFor);

        // console.log(formData)

        axios.post(`${baseURI}/video/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=your-boundary-string',
                "Authorization": "Bearer " + token
            }
        }).then((res) => { console.log("success!"); setLoading(false); window.location.replace("/admin/video") })
            .catch(() => { console.log("fail!"); setLoading(false); alert("fail") })
    };


    const onInputChange = (e, fieldName) => {
        setVideoForm({ ...videoForm, [fieldName]: e.target.value })
    }

    return (
        <div className='page' >
            <p className='page_label'>Create Video</p>
            {
                loading && <Loading />
            }
            <div className="col-md-12 ">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">title video </label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => onInputChange(e, 'title')} className="form-control" id="inputProductName" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">link video </label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => onInputChange(e, 'link')} className="form-control" id="inputProductName" />
                    </div>
                   
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label"> program </label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' onChange={(e) => onInputChange(e, 'videoFor')} >
                            <option className='h-100 w-100 ps-3 ' value="men" >Men</option>
                            <option className='h-100 w-100 ps-3 ' value="women" >Women</option>
                        </select>
                    </div>
                </div>


                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Picture</label>
                    <div className="col-sm-10">
                        <div className="mb-3">
                            {/* <input className="form-control form-control-sm" id="formFileSm" type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} /> */}
                            <input className="form-control form-control-sm" id="formFileSm" type="file" name="images" accept="image/*" onChange={e => setImage(e.target.files[0])} />
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="w-100 ">
                        {/* <button className='btn  btn-dark w-100 ' onClick={() => { postDetails() }} >submit</button> */}
                        <button className='btn  btn-dark w-100 ' onClick={() => { postDetails() }} >submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}




export default CreateٍVideo