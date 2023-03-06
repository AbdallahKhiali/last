import React, { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import "./utils.scss"
const MyBagCard = ({ deleteProductFromCart, name, price, quantity, type, size, id, picture }) => {

  const { baseURI } = useContext(GeneralContext)

  return (
    <div className='my-bag-card' >

      <div className="btn-remove-card-bag" onClick={() => { deleteProductFromCart() }}>Remove</div>
      <div className="bag-card-info-container">
        <div className="image-container">
          <img src={`${baseURI}/${picture}`} alt="hero" />
        </div>
        <div className="bag-card-info">
          <h3>{name}</h3>
          <p>{type} -  <b> {price}DA </b></p>
          <hr />
          <h4>SIZE : {size}</h4>
        </div>

      </div>
    </div>
  )
}

export default MyBagCard