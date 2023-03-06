import React from 'react'

const ProgramPaymentCard = ({ price, shipping_cost, program_title, program_subtitle }) => {
    return (
        <div className="offer">
            <div className="offer-inner">

                <div className="offer-inner-content">
                    <div className="offer-inner-content-thumbnail">
                        <img alt="offer" src={require('../../img/offer-pack.png')} />
                    </div>
                    <div className="offer-inner-content-info">
                        <p className='offer-inner-content-info-label' >{program_title} </p>
                        <p className='offer-inner-content-info-label' >{program_subtitle} - {price} DA </p>
                    </div>

                </div>

                <div className="offer-element">
                    <p>Bodyetic </p>
                    <p>{price} DA </p>
                </div>
                <div className="offer-element">
                    <p>Shipping cost </p>
                    <p>{shipping_cost} DA </p>
                </div>
                <div className="offer-element">
                    <h2>ORDER TOTAL TTC </h2>
                    <p>{price} DA </p>
                </div>

            </div>
        </div>
    )
}

export default ProgramPaymentCard