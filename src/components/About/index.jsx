import React from 'react'
import "./About.scss"

const About = () => {
    return (
        <div className='about' >
            <div className="about-inner">

                <div className="about-text">
                    <h1>Find Your New Way</h1>
                    <p>to workout with <b> Bodyetic </b></p>
                </div>

                <div className="about-inner-box">

                    <div className="about-inner-left-box">

                        <div className='about-inner-left-box-row '   >
                            <div className='box-row-inner' >
                                <img src={require("../../img/biceps.svg").default} alt="arm" className='box-row-inner-bodypart-img' />
                                <p className='box-row-bodypart'>Biceps</p>
                            </div>
                            <div className='box-row-inner' >
                                <img src={require("../../img/abs.svg").default} alt="arm" className='box-row-inner-bodypart-img' />
                                <p className='box-row-bodypart'>Abs</p>
                            </div>
                        </div>
                        <div className='about-inner-left-box-row '   >
                            <div className='box-row-inner' >
                                <img src={require("../../img/back.svg").default} alt="arm" className='box-row-inner-bodypart-img' />
                                <p className='box-row-bodypart'>Back</p>
                            </div>
                            <div className='box-row-inner' >
                                <img src={require("../../img/squat.svg").default} alt="arm" className='box-row-inner-bodypart-img' />
                                <p className='box-row-bodypart'>squats</p>
                            </div>
                        </div>


                    </div>

                    <div className="about-inner-right-box">
                        <img src={require('../../img/about_women.png')} className="right-box-img women" alt="women" />
                        <img src={require('../../img/crossfit.svg').default} alt="men" className='right-box-img men' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About