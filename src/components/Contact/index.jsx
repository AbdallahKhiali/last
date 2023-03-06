import React, { useRef, useState } from 'react'
import "./Contact.scss"
import Header from "../Header/Header"
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('bodyetic_testing', 'template_2a6m38c', form.current, 'COTXO5caxAR8K8FFH')
            .then((result) => {
                alert(result.text)
                // console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const [contactForm, setContactForm] = useState({
        email: "",
        subject: "",
        message: "",

    })

    const handleChange = (e, name) => {
        setContactForm({ ...contactForm, [name]: e.target.value })
    }

    return (
        <div className='contact' >

            <div className="header-container">
                <Header />
            </div>

            <div className="contact-thumbnail">
                <img src={require('../../img/logoFooter.svg').default} alt="thumbnail" className='contact-logo' />
                <p className='contact-typo' >
                    BODYETIC Help you to change your life by the best video training and our coaches create a workout plan for you that’s tailored to your body now — and moves you forward to where you want to go.
                    From in-club personal training sessions to virtual options, our personal training program takes the guesswork out of fitness, so you can achieve more with the time you have.
                </p>
            </div>
            <div className="contact-form-wrapper">
                <h1 className='contact-form-label' >Contact us</h1>
                <form ref={form} onSubmit={sendEmail} className="contact-form-inner">
                    <div className="contact-form-content">

                        <label>Your email address</label>
                        <input type="email" name="email" onChange={(e) => { handleChange(e, "email") }} className="form-control" />

                    </div>

                    <div className="contact-form-content">

                        <label>Subject</label>
                        <input name="subject" onChange={(e) => { handleChange(e, "subject") }} className="form-control" />

                    </div>


                    <div className="contact-form-content">
                        <label>Message</label>
                        <textarea name="message" onChange={(e) => { handleChange(e, "message") }} className="form-control contact-textarea" />
                    </div>
                    <div className="contact-form-content">
                        <p>
                            Please enter the details of your request , A member of our team will
                            respond as soon as possible
                        </p>
                    </div>

                    <button type='submit' className="contact-form-btn">
                        <span>  submit    </span>
                        <img src={require('../../img/yellow_arrows.svg').default} height={16} alt="submit" />
                    </button>


                </form>
            </div>
        </div>
    )
}

export default Contact