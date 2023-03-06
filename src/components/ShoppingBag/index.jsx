import React, { useEffect, useState } from 'react'
import BagProduct from '../utils/BagProduct'
import "./ShoppingBag.scss"
import Secondary from '../utils/Secondary'

const ShoppingBag = () => {

    const [cartProducts, setcartProducts] = useState([])




    const deleteProductFromCart = (id, size) => {
        const filteredCart = cartProducts.filter(product => (product._id != id) || (product.size != size));
        localStorage.setItem('cart', JSON.stringify(filteredCart));
        window.location.reload();
    }







    const total = () => {
        const itemsCost = cartProducts.map(item => { return item.price * item.quantity })
        const getTotal = () => {
            let total = 0
            for (let i = 0; i < itemsCost.length; i++) {
                total += itemsCost[i]
            }
            return total

        }
        return getTotal()
    }










    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setcartProducts(cart)
    }, [])



    return (
        <div className='shopping_bag' >
            <div className="bag">
                <h1 className='bag_label'>My Shopping Bag</h1>
                <h2 className='bag_sub_label' >
                    Product
                </h2>
                <div className='bag_container' >
                    {
                        cartProducts && cartProducts.map(({ _id, picture, name, instock, price, quantity, size, type }, i) => {
                            return (
                                <BagProduct key={i} deleteProductFromCart={() => deleteProductFromCart(_id, size)} id={_id} picture={picture} name={name} instock={instock} price={price} quantity={quantity} size={size} type={type} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="tip">
                <div className="summary">
                    <h2 className='summary_label'>Summary </h2>
                    <div>
                        {
                            cartProducts && cartProducts?.map(({ name, instock, price, quantity, size, type }, i) => {
                                return (
                                    <div key={i} className="summary_row">
                                        <p>{name} x {quantity} </p>
                                        <p>{price * quantity} DA</p>
                                    </div>)
                            })
                        }

                        <hr />

                        <div className="summary_row">
                            <p>Ordera Total TTC  </p>
                            <p>{total()} DA</p>
                        </div>


                    </div>

                    <Secondary  >
                        <a href="/payment_bag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
                            <p>CHECKOUT</p>
                            <img src={require('../../img/arrows.png')} alt="arrows" style={{ height: '16px' }} />
                        </a>
                    </Secondary>

                </div>
            </div>
        </div >
    )
}

export default ShoppingBag