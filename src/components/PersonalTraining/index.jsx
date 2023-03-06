import React from 'react'
import { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import BodyeticWarriors from "../BodyeticWarriors"
import Footer from "../Footer"
import PersonalProgramCard from '../utils/PersonalProgramCard'
// import ProgramCard from '../utils/ProgramCard'
import "./PersonalTraining.scss"
import starterProgramImage from "../../img/personal-training-offer.svg"
import advancedProgramImage from "../../img/personal-training-offer-advanced.svg"

const PersonalTraining = () => {


    const packs = [
        {
            pack_type: "starter",
            title: "Bodyetic Pro",
            subtitle: "Personal Training Program ",
            period: "3 months",
            price: "20 000",
            options: [
                'Customized Workout Program (Monthly progressions)',
                'Customized Nutrition plan ',
                'Healthy Recipes ',
                'Fitness Tips ',
            ],
            link: "/payment_advanced_program",
            picture: starterProgramImage,
        },
        {
            pack_type: "pro",
            period: "month",
            title: "Bodyetic Pro",
            subtitle: "Personal Training Program 2 ",
            price: "25 000",
            options: [
                'Training with coach in the gym',
                'Customized Workout Program (Weekly progressions)',
                'Customized Nutrition plan',
                'Healthy Recipes',
                'Fitness Tips',
            ],
            link: "/payment_advanced_program",
            picture: advancedProgramImage,
            // picture: "../../img/personal-training-offer-advanced.png",

        },
    ]

    const healthyMode = [
        {
            name: "heart.png",
        },
        {
            name: "apple.png",
        },
        {
            name: "water.png",
        },
        {
            name: "nutrition.png",
        },
    ]


    return (
        <div className='personaltrain' >

            <div className="personaltrain-inner">
                <h1 className="personaltrain-inner-typo">
                    <div className='personaltrain-inner-hero-label' >Personal Training Programs</div>
                </h1>
                <div className='personaltrain-inner-hero-gallery' >
                    <div className="personaltrain-gallery-video principal">
                    </div>
                </div>
            </div>

            <div className="personaltrain-about">

                <div className="personaltrain-about-info">
                    <div className="personaltrain-about-thumbnail">
                    </div>
                    <div className="personaltrain-about-info-typo">
                        <h1 className='personaltrain-about-label' >New Habit</h1>
                        <p className='personaltrain-about-description' >
                            Partner with a coach in one-on-one sessions to help unlock the fitness results you want. Our personaltraines will guide you to workouts that fit your goals, train you on the range of equipment at the gym
                        </p>

                    </div>

                </div>


                <div className="personaltrain-about-info">

                    <div className="personaltrain-about-info-typo">
                        <h1 className='personaltrain-about-label' >Healthy lifestyle</h1>
                        <div className='personaltrain-about-healthy' >

                            {
                                healthyMode.map(({ name }, i) => {
                                    return (
                                        <div key={i} className="healthy-mode ">
                                            <img className='healthy-mode-img  ' alt="mode" src={require(`../../img/${name}`)} />
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <p className='personaltrain-about-description' >
                            We help you to build healthy habits with your nutrition and recovery at the same time we keep you challenged, motivated and improving.
                        </p>
                    </div>

                    <div className="personaltrain-about-thumbnail bg-meal ">
                    </div>

                </div>

            </div>

            <div className="workout-program">
                <h1 className='workout-program-label' >Choose The Best Plan For Your GOAL</h1>
                <div className='workout-program-types' >
                    <div className="workout-program-type">
                        <h2>STARTER</h2>
                        <p>
                            The starter program is perfect for someone with ambitious goals that want serious results, is perfect to help you succeed
                        </p>
                    </div>

                    <div className="workout-program-type">
                        <h2>PRO</h2>
                        <p>
                            The Pro program is designed to
                            deliver you the Best results possible with all the tools necessary to maximize your true body’s potential, perfect for the serious lifter.
                        </p>
                    </div>
                </div>
                <div className="workout-program-offers">
                    {
                        packs.map(({ price, period, picture, pack_type, options, link, title, subtitle }, i) => {
                            return (
                                <PersonalProgramCard picture={picture} price={price} link={`${link}/${title}/${subtitle}/${price}`} pack_type={pack_type} period={period} options={options} key={i} />
                            )
                        })
                    }
                </div>
            </div>

            <BodyeticWarriors />
            <Footer />
        </div>
    )
}

export default PersonalTraining