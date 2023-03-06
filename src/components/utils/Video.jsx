import React, { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import "./utils.scss"
// import { useNavigate } from 'react-router-dom'
const Video = ({ setIsPlaying, picture, setCurrentVideo, link , title }) => {

    const { baseURI } = useContext(GeneralContext)

    // const navigate = useNavigate();
    return (
        <div className="programvideo" onClick={() => { setCurrentVideo(link) }}>
            <div className='programvideo-inner' onClick={() => setIsPlaying(true)}  >
                <div className='programvideo_btn_wrapper' >
                    <img src={require('../../img/play.png')} alt="play_btn" />
                </div>
                <img className='video-bg' src={`${baseURI}/${picture}`} alt="video-bg" />
            </div>
            <p className='programvideo-name' >{title}</p>
        </div>
    )
}

export default Video