import React, { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import "./utils.scss"
const BagProduct = ({ deleteProductFromCart, name, price, quantity, type, size, id, picture }) => {



    const { baseURI } = useContext(GeneralContext)
    return (
        <div className='bagproduct' >
            <div className='removebtn' onClick={() => { deleteProductFromCart() }}>
                <img src={require('../../img/close.svg').default} alt="close" />
            </div>
            <div className="bag-productcard-image-container">

                {
                    (picture) ?
                        <img alt="product" className='product-img' src={`${baseURI}/${picture}`} />
                        :
                        <img alt="product" className='product-img' src={require('../../img/women_store.png')} />
                }

            </div>
            <div className='bag-productcard-info-container' >
                <div className="productInfo">

                    <h3 className='bagproductName' > {name}</h3>
                    <p className='bagproductLabel' > {type || 'BULK'} </p>
                    <hr />
                    {/* <p className='bagproductTypo' ><p> Category : </p> Clothe </p> */}
                    <p className='bagproductTypo' ><p> Quantity : </p> {quantity} </p>
                    <p className='bagproductTypo' ><p> Size : </p> {size} </p>
                    <div className='bagproductTypo bagproductprice' >
                        <p>PRICE:</p>
                        <h2>{price}DA</h2>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default BagProduct