import React from 'react'
import "./utils.scss"
import Secondary from "./Secondary"
import { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import MyBagCard from './MyBagCard'
const BagSlide = ({ setbagSlide }) => {

    const { navigate } = useContext(GeneralContext)


    const cartProducts = JSON.parse(localStorage.getItem("cart"));





    const deleteProductFromCart = (id, size) => {

        const filteredCart = cartProducts.filter(product => (product._id != id) || (product.size != size));
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        window.location.reload();
    }



    return (
        <div className='bagslide_wrapper' >
            <div className="bagslide">
                <div className='bagslide_row' >
                    <div className='bagslide_row_page' >
                        <img alt='bag' src={require('../../img/bag_black.png')} />
                        <h3>MY BAG</h3>
                    </div>
                    <div onClick={() => { setbagSlide(false) }} className="closebtn">
                        <img src={require('../../img/close.svg').default} alt="close" />
                    </div>
                </div>
                <div className="bagslide_items">

                    {
                        cartProducts && cartProducts?.map(({ _id, name, instock, price, quantity, size, type, picture }, i) => {
                            return (
                                <MyBagCard deleteProductFromCart={() => deleteProductFromCart(_id, size)} picture={picture} key={i} id={_id} name={name} instock={instock} price={price} quantity={quantity} size={size} type={type} />
                            )
                        })
                    }
                </div>
                <Secondary >
                    <div onClick={() => { navigate('/shopping_bag') }} style={{ display: 'flex', gap: "0.5rem", alignItems: 'center' }}  >
                        <p>VIEW BAG</p>
                        <img src={require('../../img/arrows.png')} alt="arrows" style={{ height: '16px' }} />
                    </div>
                </Secondary>
            </div>
        </div>
    )
}

export default BagSlide