import React, { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
// import { Link } from 'react-router-dom'
import BodyeticWarriors from "../BodyeticWarriors"
import Footer from "../Footer"
import PersonalProgramCard from '../utils/PersonalProgramCard'
import "./CoachInfo.scss"
const CoachInfo = ({ women, insta, coach_name, description_insta, pic_principal, first_pic, second_pic, about_pic, pack }) => {

    const { baseURI } = useContext(GeneralContext)
    return (
        <div className='coachinfo' >
            <div className="coachinfo-inner">
                <h1 className="coachinfo-inner-typo">
                    <div className='coachinfo-inner-hero-label' >Coaching</div>
                    <div className='coachinfo-inner-hero-name' >{coach_name}</div>
                </h1>
                <div className='coachinfo-inner-hero-gallery' >
                    <img src={require(`../../img/${first_pic}`)} alt="training" />
                    <img  src={require(`../../img/${pic_principal}`)}  alt="training" />
                    <img src={require(`../../img/${second_pic}`)} alt="training" />
                </div>
            </div>

            <div className="coachinfo-about">
                <h1 className="coachinfo-about-quote"  >
                    “ The only person you are destined to become is the person you decide, to be ”
                </h1>
                <div className="coachinfo-about-info">
                    <div className={(women === true) ? "coachinfo-about-thumbnail coach-bg-women " : "coachinfo-about-thumbnail"}>
                        <img src={`${baseURI}/public/images/Bodyetic_cadre.png`} className="coachinfo-about-thumbnail-img " alt="coachinfo-about-info-img" />
                        {/* <img src={about_pic} className="coachinfo-about-info-img " alt="coachinfo-about-info-img" /> */}
                        <img src={require(`../../img/${about_pic}`)} className="coachinfo-about-info-img " alt="coachinfo-about-info-img" />

                    </div>
                    <div className="coachinfo-about-info-typo">
                        <h1 className='coachinfo-about-label' >About Him</h1>
                        <p className='coachinfo-about-description' >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                        </p>
                        <div className='coachinfo-about-awards'>
                            <img src={require('../../img/coachInsta.svg').default} alt="trophy-img" />
                            <p >{insta}</p>
                        </div>
                        <div className='coachinfo-about-awards'>
                            <img src={require('../../img/coachInsta.svg').default} alt="trophy-img" />
                            <p >{insta}</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="workout-program">
                <h1 className='workout-program-label' >Workout video Program</h1>
                <p className='workout-program-description' >
                    BODYETIC Help you to change your life by the best video training to avoid bad exercise and grow your body with safe method
                </p>
                <h1 className='workout-program-label' >Choose The Best Plan For Your GOAL</h1>
                <div className="workout-program-offers">
                    {
                        pack.map(({ price, pack_type, title, subtitle, options, picture }, i) => {
                            return (
                                <PersonalProgramCard key={i} title={title} subtitle={subtitle} picture={picture} price={price} pack_type={pack_type} link={`/payment_program/${title}/${subtitle}/${price}`} options={options} />
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

export default CoachInfo