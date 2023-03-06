import React from 'react'
// import { Link } from 'react-router-dom'
import "./utils.scss"
const PersonalProgramCard = ({ price, pack_type, period, title, subtitle, options, link, picture, btncolor }) => {
    return (
        <a href={link} className='personal-program' >
            <div className="personal-program-typo">
                <h1>Bodyetic</h1>
                <p>{pack_type}</p>
            </div>
            <h2>{price}DA / {period} </h2>
            <div className="personal-program-offer">
                <img src={picture} className="offer-img" alt="offer-img" />
            </div>
            <ul className='program-offer-options' >
                {
                    options.map((e, i) => {
                        return (
                            <li className='program-offer-option' key={i}>
                                <img src={require('../../img/true.svg').default} alt="true" />
                                <p>{e}</p>
                            </li>
                        )
                    })
                }
            </ul>
            {
                (pack_type === 'avancé' || pack_type === 'pro') ?
                    <div className="personal-program-button" style={{ backgroundColor: '#FF6F91' }}  >
                        Get the program <img alt='arrow-next' src={require('../../img/next-arrow.png')} />
                    </div>
                    :
                    <div className="personal-program-button"   >
                        Get the program <img alt='arrow-next' src={require('../../img/next-arrow.png')} />
                    </div>
            }
        </a>
    )
}

export default PersonalProgramCard