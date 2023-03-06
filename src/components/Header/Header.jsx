import React, { useContext, useState } from 'react'
import "./Header.scss"
import { Link } from "react-router-dom"
import BagSlide from '../utils/BagSlide'
import { GeneralContext } from '../../contexts/GeneralContext'

const Header = () => {
    const isAuth = sessionStorage.getItem("isAuth");
    const [headerMenu, setHeaderMenu] = useState(false)
    const [headerCoaching, setHeaderCoaching] = useState(false)
    const [headerProducts, setHeaderProducts] = useState(false)
    const [bagSlide, setbagSlide] = useState(false)

    const logout = () => {
        sessionStorage.clear();
        localStorage.clear()
    }

    const { setIsPassword } = useContext(GeneralContext)

    return (

        <div className='header' >
            <div className='header-inner'>
                {
                    headerMenu ?
                        < img onClick={() => { setHeaderMenu(!headerMenu); setHeaderCoaching(true); setHeaderProducts(true) }} className='header-toggler' alt="toggler" src={require("../../img/close.svg").default} />
                        :
                        < img onClick={() => { setHeaderMenu(!headerMenu); setHeaderCoaching(true); setHeaderProducts(true) }} className='header-toggler' alt="toggler" src={require("../../img/toggler.svg").default} />
                }

                <Link className='header-logo' to="/" onClick={() => { setHeaderMenu(false) }} >
                    <img className='header-logo-img' alt='bodyetic' src={require('../../img/logo.svg').default} />
                </Link>
                <ul className='header-menu' >
                    <li onMouseEnter={() => { setHeaderMenu(true); setHeaderCoaching(true); setHeaderProducts(false) }} onClick={() => { setHeaderMenu(false) }} onMouseLeave={() => { setHeaderMenu(false); }} className='header-menu-item'>
                        <div className='menu-item-content subnav-btn'>
                            Coaching
                        </div>
                    </li>

                    <li onMouseEnter={() => { setHeaderMenu(true); setHeaderProducts(true); setHeaderCoaching(false) }} onClick={() => { setHeaderMenu(false) }} onMouseLeave={() => { setHeaderMenu(false); }} className='header-menu-item'>
                        <div className='menu-item-content subnav-btn'>
                            Product
                        </div>
                    </li>

                    <li className='header-menu-item'>
                        <Link to="/contact" onClick={() => { setHeaderMenu(false) }} className='menu-item-content'>
                            Contact us
                        </Link>
                    </li>
                </ul>


                <div className='header-options' >


                    <div className='icon-wrapper' >
                        <img onClick={() => { setbagSlide(true) }} alt="bag" src={require('../../img/bag.png')} />
                    </div>
                    {
                        isAuth ?
                            <>
                                <button className='icon-wrapper logout_btn' >
                                    <img src={require('../../img/logout.svg').default} alt="logout" onClick={() => { logout(); window.location.replace('/') }} />
                                </button>
                                < button className='icon-wrapper logout_btn' >
                                    <img src={require('../../img/settings.svg').default} alt="logout" onClick={() => { setIsPassword(true) }} />
                                </button>
                            </>
                            : <button className='icon-wrapper logout_btn' >
                                <img src={require('../../img/user.svg').default} alt="logout" onClick={() => { window.location.replace('/login') }} />
                            </button>
                    }

                    <select className='header-option-select' >
                        <option>EN</option>
                    </select>


                </div>



            </div>
            {

                headerMenu && <div className='sub-header' onMouseEnter={() => { setHeaderMenu(true) }} onMouseLeave={() => { setHeaderMenu(false) }} >
                    <div className="sub-header-inner">
                        {
                            headerCoaching &&
                            < ul className="sub-header-inner-coaching">
                                <li>
                                    <h3 className='sub-header-inner-label' >COACHING</h3>
                                </li>
                                <li>
                                    <Link to="/coach/tayeb">coaching men</Link>
                                </li>

                                <li>
                                    <Link to="/coach/lyna">coaching women</Link>
                                </li>

                                <li>
                                    <Link to="/personal">Personal Training</Link>
                                </li>

                                <img src={require('../../img/header-coaching.svg').default} className="header-coaching" alt="bg" />

                            </ul>
                        }
                        {
                            headerProducts &&
                            <ul className="sub-header-inner-products">
                                <li>
                                    <h3 className='sub-header-inner-label' >Products</h3>
                                </li>
                                <li>
                                    <a href="/market/clothes">Gym Wear & Accessories</a>
                                </li>

                                <li>
                                    <a href="/market/gainers">Supplements & Sports Nutrition </a>
                                </li>

                                <img src={require('../../img/header-gainers.svg').default} className="header-gainers " alt="bg" />
                                <img src={require('../../img/header-clothes.svg').default} className="header-clothes " alt="bg" />

                            </ul>
                        }

                        <ul className="sub-header-inner-contact">
                            <li>
                                <h3 className='sub-header-inner-label' >contact</h3>
                            </li>
                            <li>
                                <p>contact us</p>
                            </li>

                            <li>
                                <p>N : +213 055 260 837</p>
                            </li>

                            <li>
                                <p>Contact@bodyetic.com</p>
                            </li>
                        </ul>

                        <ul className="sub-header-inner-contact nav_socials ">
                            <li>
                                <h3 className='sub-header-inner-label' >Follow us</h3>
                            </li>
                            <li>
                                <div className='socials'  >
                                    <div className="social">
                                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="/">
                                            <img className='social-img' alt='social-img' height={16} src={require(`../../img/insta.svg`).default} />
                                        </a>
                                    </div>
                                    <div className="social">
                                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="/">
                                            <img className='social-img' alt='social-img' height={16} src={require(`../../img/facebook.svg`).default} />
                                        </a>
                                    </div>
                                    <div className="social">
                                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="/">
                                            <img className='social-img' alt='social-img' height={16} src={require(`../../img/youtube.svg`).default} />
                                        </a>
                                    </div>
                                    <div className="social">
                                        <a style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="/">
                                            <img className='social-img' alt='social-img' height={16} src={require(`../../img/tiktok.svg`).default} />
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <p>© 2022 | Bodyetic | All Rights Reserved </p>
                            </li>
                        </ul>

                    </div>
                </div>

            }
            {bagSlide && <BagSlide setbagSlide={setbagSlide} />}
        </div >

    )
}

export default Header