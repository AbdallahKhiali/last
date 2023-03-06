import React from 'react'
import Button from '../utils/Button'

import "./Coaching.scss"
const Coaching = () => {
    return (
        <div className='coaching' >
            <h1 className='coaching-label' > Coaching </h1>
            <p className='coaching-description'>Meet The Trainers with video workout</p>
            <div className='coaching-container'>

                <a href="/coach/tayeb" className='coaching-box' >
                    <div className="coaching-box-bg coach-bg-men">
                        <img className="coaching-box-bg-img" alt="coaching-box-img" src={require('../../img/coaching-tayeb.png')} />
                        <img className="coaching-box-bg-design-img" alt="coaching-box-bg-design-img" src={require('../../img/coach-design-bg.png')} />
                    </div>
                    <p className="coaching-box-coach-name">Tayeb Zerrouki</p>
                    <p className="coaching-box-coach-label">Men program</p>
                    <div className="coaching-box-coach-btn">discover</div>
                </a>

                <a href="/coach/lyna" className='coaching-box' >
                    <div className="coaching-box-bg coach-bg-women ">
                        <img className="coaching-box-bg-img" alt="coaching-box-img" src={require('../../img/coaching-lyna.png')} />
                        <img className="coaching-box-bg-design-img" alt="coaching-box-bg-design-img" src={require('../../img/coach-design-bg.png')} />
                    </div>
                    <p className="coaching-box-coach-name">Lyna Ben</p>
                    <p className="coaching-box-coach-label">Women program</p>
                    <div className="coaching-box-coach-btn">discover</div>
                </a>

            </div>

        </div>
    )
}

export default Coaching