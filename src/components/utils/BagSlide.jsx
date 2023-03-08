import React from 'react'
import "./utils.scss"
import Secondary from "./Secondary"
import { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'
import MyBagCard from './MyBagCard'
const BagSlide = ({ setbagSlide }) => {

    const { navigate } = useContext(GeneralContext)


    const cartProducts = JSON.parse(localStorage.getItem("cart"));





    const deleteProductFromCart = (_id, size, colors) => {

        // const filteredCart = cartProducts.filter(product => (product._id != id) || (product.size != size));
        // localStorage.setItem('cart', JSON.stringify(filteredCart));
        // window.location.reload();

        // console.log(cartProducts)

        const existingProductIndex = cartProducts.findIndex(
            (item) => item._id === _id && item.size === size && item.colors === colors
        );

        // console.log(existingProductIndex)

        if (existingProductIndex !== -1) {
            const updatedCartItems = [...cartProducts];

            updatedCartItems.splice(existingProductIndex, 1);

            localStorage.setItem('cart', JSON.stringify(updatedCartItems));
            window.location.reload();
        }

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
                        cartProducts && cartProducts?.map(({ _id, name, instock, price, quantity, size, type, picture, colors }, i) => {
                            return (
                                <MyBagCard deleteProductFromCart={() => deleteProductFromCart(_id, size, colors)} colors={colors} picture={picture} key={i} id={_id} name={name} instock={instock} price={price} quantity={quantity} size={size} type={type} />
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