import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import Video from '../utils/Video'
import VideoWrapper from '../utils/VideoWrapper'
import "./ProgramVideos.scss"

const ProgramVideos = () => {
    const { axiosConfig, role, programFor, userId, baseURI, setIsPassword, isPassword } = useContext(GeneralContext)

    const [video, setVideo] = useState([])
    const [videoBrowsed, setVideoBrowsed] = useState([])
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentVideo, setCurrentVideo] = useState()

    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: ''
    })

    const handleChange = (e, name) => {
        setPasswordForm({ ...passwordForm, [name]: e.target.value })
    }

    const changePassword = () => {
        axios.put(`${baseURI}/users/changePassword/${userId}`, passwordForm, axiosConfig).then(() => { setIsPassword(false); alert('password has been changed successfully'); localStorage.clear(); window.location.replace('/login') }).catch((error) => { console.log(error) });
    }



    useEffect(() => {
        axios.get(`${baseURI}/video/all`, axiosConfig).then((res) => {
            axios.get(`${baseURI}/users/${userId}`, axiosConfig).then((res) => {

                if (res.data.role === "admin") {
                    setVideoBrowsed([...video])
                } else {
                    (res.data.setAccountFor === "men") ?
                        setVideoBrowsed(video.filter(item => item.videoFor === "men"))
                        :
                        setVideoBrowsed(video.filter(item => item.videoFor === "women"))
                }

            }).catch((err) => { window.location.reload() })
            setVideo(res.data)
        }).catch((err) => { console.log(err) })
    }, [video])


    return (
        <div className='programvideos'  >

            {isPassword && <div className='password_modal' >
                <div className='close_password_modal' onClick={() => { setIsPassword(false) }} ><img src={require('../../img/close.svg').default} /></div>
                <h2 className='header_modal' >change password</h2>
                <div className="login-form-content">
                    <label>current password </label>
                    <div className='form-input_container' >
                        <img alt="login-form" src={require("../../img/login_pw.svg").default} height={24} />
                        <input className="form-control" onChange={(e) => { handleChange(e, "currentPassword") }} type="password" placeholder='Password' />
                    </div>
                </div>
                <div className="login-form-content">
                    <label>new password </label>
                    <div className='form-input_container' >
                        <img alt="login-form" src={require("../../img/login_pw.svg").default} height={24} />
                        <input className="form-control" onChange={(e) => { handleChange(e, "newPassword") }} type="password" placeholder='Password' />
                    </div>
                </div>

                <div onClick={() => { changePassword() }} className="login-form-btn">
                    <span>change password</span>
                    <img alt="login-form" src={require('../../img/yellow_arrows.svg').default} height={16} />
                </div>


            </div>}



            <h1 className='coach-label' >Program :</h1>
            <div className='programvideos-inner' >
                {
                    videoBrowsed?.map(({ link, image, title }, i) => {

                        return (
                            <Video key={i} setCurrentVideo={setCurrentVideo} title={title} link={link} picture={image} setIsPlaying={setIsPlaying} />
                        )
                    })
                }

                {
                    isPlaying && <VideoWrapper currentVideo={currentVideo} setIsPlaying={setIsPlaying} />

                }


            </div>
        </div>
    )
}

export default ProgramVideos