import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.scss"
const Hero = () => {
    return (


        <div className='hero' >
            <div className="alter-wrapper">

                <div className='alter-image' >
                    <img src={require('../../img/hero_men.png')} alt="human" className="alter-men" />
                    <img src={require('../../img/hero_women.png')} alt="human" className="alter-women" />
                    <Link to="/video" className="hero-btn-wrapper">
                        <img src={require("../../img/hero-play.svg").default} className="play" alt='play'   />
                        <p> Watch video</p>
                    </Link>
                    <h1 className='hero-text' >
                        <div>
                            Changing  BODIES
                        </div>
                        <div>
                            Changing  <span>    lives  </span>
                        </div>
                    </h1>
                </div>
            </div>

        </div>



    )
}

export default Hero
