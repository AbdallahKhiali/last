import React from 'react'
import ReactPlayer from 'react-player'
import "./utils.scss"
const VideoWrapper = ({ setIsPlaying, currentVideo }) => {

    const link = currentVideo.split("/")[currentVideo.split("/").length - 1]

    return (
        <div className='vimeo-wrapper' onClick={() => setIsPlaying(false)} >
            <iframe
                // ref={videoRef}
                title="Vimeo video player"
                src={`https://player.vimeo.com/video/${link}`}
                width="860"
                height="635"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
            ></iframe>

        </div>
    )
}

export default VideoWrapper
