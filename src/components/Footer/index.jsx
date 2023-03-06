
import React from 'react'
import "./Footer.scss"


const Footer = () => {

    const socialMedia = [
        {
            name: "insta.svg",
            link: "https://www.instagram.com",
        },
        {
            name: "youtube.svg",
            link: "https://www.youtube.com",

        },
        {
            name: "tiktok.svg",
            link: "https://www.tiktok.com",

        },
        {
            name: "facebook.svg",
            link: "https://www.facebook.com",
        },
    ]

    const contactItems = [
        {
            name: "contact us",
            link: "/contact"

        },
        {
            name: "+213 055 260 837",
        },
        {
            name: "Contact@bodyetic.com",
            link: "/contact"
        },
    ]

    const coachingItems = [
        {
            name: "coaching Men",
            link: "/coach/tayeb"
        },
        {
            name: "coaching Women",
            link: "/coach/lyna"
        },
        {
            name: "Personal coaching",
            link: "/personal"
        },


    ]

    const productItems = [
        {
            name: "Gym Wear & Accessories",
            link: "/coach/tayeb"
        },
        {
            name: "Supplements & Sports Nutrition",
            link: "/coach/lyna"
        },

    ]
    return (
        <div className='footer' >

            <div className="footer-inner-social">

            </div>
            <div className="footer-inner">
                <div className="footer-logo">
                    <img src={require('../../img/logoFooter.svg').default} alt="" />
                </div>

                <div className="footer-info">
                    <div className="footer-links">

                        <div className="link">
                            <p className='link-label' >Coaching</p>
                            {
                                coachingItems.map(({ name, link }, i) => {
                                    return (
                                        <a key={i} href={link} className='footer-link-content' >{name}</a>
                                    )
                                })
                            }
                        </div>


                        <div className="link">
                            <p className='link-label' >Product</p>
                            {
                                productItems.map(({ name, link }, i) => {
                                    return (
                                        <a key={i} href={link} className='footer-link-content' >{name}</a>
                                    )
                                })
                            }
                        </div>


                        <div className="link">
                            <p className='link-label' >CONTACT</p>
                            {
                                contactItems.map(({ name, link }, i) => {
                                    return (
                                        <a key={i} href={link} className='footer-link-content' >{name}</a>
                                    )
                                })
                            }
                        </div>

                        <div className='link social-medias' >
                            <div className='medias_container' >
                                <p className='medias_container_label' >follow us on</p>
                                <div className='socials' >
                                    {
                                        socialMedia.map(({ name, link }, i) => {
                                            return (
                                                <div key={i} className='social'  >
                                                    <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href={link}>
                                                        <img href={link} className='social-img' alt='social-img' height={16} src={require(`../../img/${name}`)} />
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <p className='footer-copyright' >© 2022 | Bodyetic | All Rights Reserved</p>
                        </div>


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer