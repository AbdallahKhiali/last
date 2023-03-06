import React, { useContext, useState } from 'react'
import StoreCard from '../utils/StoreCard'
import NextPageButton from '../utils/NextPageButton'
import "./Market.scss"
import BodyeticWarriors from '../BodyeticWarriors'
import Footer from '../Footer'
import { GeneralContext } from '../../contexts/GeneralContext'

const Market = ({ products }) => {

    const { selectedProduct, setSelectedProduct } = useContext(GeneralContext)



    let numberPages = [];
    const [selectedPage, setSelectedPage] = useState(0)

    for (let i = 1; i < Math.floor(products.length / 9) + 1; i++) {
        numberPages.push(i);
    }



    // console.log(products.length, numberPages)


    return (
        <div className='market' >
            <h1 className="market_label">Gym Wear & Accessories</h1>
            <h2 className="market_devise">NOTHING BUT ONLY THE BEST</h2>

            {
                (products.length === 0)
                    ?
                    <p style={{ width: "100%", textAlign: "center", padding: "1rem" }} > No products for the moment </p>
                    :
                    <>
                        <div className="market_products">
                            {
                                (selectedPage === numberPages.length - 1) ?
                                    products.slice(products.length - 9, products.length).map(({ _id, price, name, images }, i) => {
                                        return (
                                            <StoreCard key={i} _id={_id} price={price} name={name} picture={images[0]} />
                                        )
                                    })
                                    :
                                    products.slice((selectedPage * 9), (9 * (selectedPage + 1))).map(({ _id, price, name, images }, i) => {
                                        return (
                                            <StoreCard key={i} _id={_id} price={price} name={name} picture={images[0]} />
                                        )
                                    })
                            }
                        </div>


                        <div className='pagination' >
                            {
                                numberPages.map(e => {
                                    return (
                                        <NextPageButton key={e} action={() => { setSelectedPage(e) }} number={e} />
                                    )
                                })
                            }

                        </div>
                    </>

            }


            <BodyeticWarriors />
            <Footer />
        </div >
    )
}

export default Market