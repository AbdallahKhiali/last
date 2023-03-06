import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GeneralContext } from '../../contexts/GeneralContext'

const StoreCard = ({ _id, picture, name, price }) => {

    const { baseURI } = useContext(GeneralContext)

    return (
        <Link to={`/product/${_id}`} className='store_card' >
            <div className='store_card_thumbnail'>
                <img src={`${baseURI}/${picture}`} alt="product_img" />
            </div>
            <b className='store_card_name' >{name} </b>
            <p className='store_card_label' >Bodyetic</p>
            <b className='store_card_price' >{price} DA</b>
        </Link >
    )
}

export default StoreCard