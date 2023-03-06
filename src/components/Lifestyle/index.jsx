import React, { useState } from 'react'
import Button from '../utils/Button'
import "./Lifestyle.scss"

const Lifestyle = () => {

    const [selectedSlide, setSelectedSlide] = useState(0)
    const persons = [
        {
            name: "Farid Benmesbah",
            duration: '12 mois',
            weight: '-14Kg',
            before: 'training-before.png',
            after: 'training-after.png',
        },
        {
            name: "Aghiles Benmesbah",
            duration: '2 mois',
            weight: '+1Kg',
            before: 'training-before.png',
            after: 'training-after.png',
        },
        {
            name: "Toufik Benmesbah",
            duration: '12 mois',
            weight: '+14Kg',
            before: 'training-before.png',
            after: 'training-after.png',
        },
        {
            name: "Mokhtar Mokhtar",
            duration: '12 mois',
            weight: '+14Kg',
            before: 'training-before.png',
            after: 'training-after.png',
        },
    ]




    return (
        <div className='lifestyle'>
            <div className="lifestyle-typo">
                <h1 className='lifestyle-label' >Body Transformation</h1>
                <p className='lifestyle-event'>Before & After </p>
            </div>
            <div className="lifestyle-slider">

                <div className="lifestyle-images">
                    <div className="lifestyle-image_container" >
                        <img src={require(`../../img/${persons[selectedSlide].before}`)} alt="before&after" className="lifestyle-image before" />
                    </div>
                    <div className="lifestyle-image_container" >
                        <img src={require(`../../img/${persons[selectedSlide].after}`)} alt="before&after" className="lifestyle-image after" />
                    </div>
                    <img src={require(`../../img/body-transformation-update.png`)} alt="before&after-update" className="lifestyle-image-update-icon" />
                </div>

                <div className="lifestyle-slider-info">
                    <h1>{persons[selectedSlide].name}</h1>
                    <div className='lifestyle-info-wrapper' >
                        <img src={require('../../img/calender.png')} alt="calender" />
                        <p>Duration : {persons[selectedSlide].duration}</p>
                    </div>

                    <div className='lifestyle-info-wrapper' >
                        <img src={require('../../img/lostweight.png')} alt="calender" />
                        <p>Lost/Gained : {persons[selectedSlide].weight}</p>
                    </div>


                    <div className='lifestyle-slider-slide' >
                        {
                            persons.splice(0, 4).map((e, i) => {
                                return (
                                    <div key={i} className={`slide ${(i === selectedSlide) ? "colorise" : ""} `} />
                                )
                            })
                        }
                        <div>
                        </div>
                    </div>

                    <div className="lifestyle-slider-button-container">
                        <div className='slider-button' onClick={() => { if (selectedSlide === 0) { setSelectedSlide(0) } else { setSelectedSlide(selectedSlide - 1) } }}  >
                            <img src={require('../../img/arrow-previous.png')} alt="previous" />
                        </div>
                        <div className='slider-button' onClick={() => { if (selectedSlide === 3) { setSelectedSlide(0) } else { setSelectedSlide(selectedSlide + 1) } }} >
                            <img src={require('../../img/arrow-next.png')} alt="previous" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="lifestyle-typo">
                <h1 className='lifestyle-label' >Personal Training Programs</h1>
                <p className='lifestyle-event'>Workout & Meal </p>
            </div>

            <div className="lifestyle-row">

                <div className="healthy-mode">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/lifestyle-runing.svg`).default} />
                </div>

                <div className="healthy-mode">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/lift.svg`).default} />
                </div>

                <div className="healthy-mode">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/stretch.svg`).default} />
                </div>

                <div className="healthy-mode">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/jump.svg`).default} />
                </div>

                <div className="lifestyle-mode-label">New Habits</div>

            </div>

            <div className="lifestyle-row">

                <div className="lifestyle-mode-label">Healthy Lifestyle</div>


                <div className="healthy-mode ">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/heart.svg`).default} />
                </div>

                <div className="healthy-mode ">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/apple.svg`).default} />
                </div>

                <div className="healthy-mode ">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/water.svg`).default} />
                </div>

                <div className="healthy-mode ">
                    <img className='healthy-mode-img ' alt="mode" src={require(`../../img/nutrition.svg`).default} />
                </div>


            </div>


            <div className="lifestyle-thumbnails">
                <img className='lifestyle-thumbnail-img' alt='thumnail' src={require('../../img/lifestyle-left-img.png')} />
                <img className='lifestyle-thumbnail-img' alt='thumnail' src={require('../../img/lifestyle-meal.png')} />
            </div>

            <div className="lifestyle-typo">
                <p className='lifestyle-change-typo'>You will learn how to take care of your
                    whole self by making gradual habit changes. </p>
                <Button text="discover" link="/personal" />
            </div>

        </div>
    )
}

export default Lifestyle