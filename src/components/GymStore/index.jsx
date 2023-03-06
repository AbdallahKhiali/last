import React from 'react'
import StoreCard from '../utils/StoreCard';
import "./Gymstore.scss";

const GymStore = ({ products, page_title, link }) => {


    return (
        <div className='gymstore' >
            <h1 className='gymstore_label' >{page_title}</h1>
            <p className='gymstore_categorie' >Men & Women</p>
            <div className="gymstore_content">
                <div className='gymstore_content_products'>
                    {
                        (products.length === 0) ?
                            <p className='no-data' >No products for the moment </p>
                            :
                            <>
                                <a href={link} className='gymstore_content_next' >
                                    <p>
                                        View All
                                    </p>
                                    <img src={require('../../img/Arrow.png')} alt="arrow" />
                                </a>
                            
                                {
                                    products?.slice(0, 3).map(({ name, _id, price, instock, images }, i) => {
                                        return (
                                            <StoreCard key={i} instock={instock} name={name} _id={_id} price={price} picture={images[0]} />
                                        )
                                    })
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default GymStore