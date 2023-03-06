import React, { useContext } from 'react'
import { GeneralContext } from '../../contexts/GeneralContext'

const ModalProduct = ({ action, price, name, description, picture, instock }) => {
    const { baseURI } = useContext(GeneralContext)
    return (


        < div className='modalproduct_wrapper' >
            <div className="modalproduct">
                <div className='closebtn' onClick={action} >
                    <img src={require('../../img/close.svg').default} alt="close" style={{ height: '12px', width: '24px' }} />
                </div>
                <img alt='modal_img' src={`${baseURI}/${picture}`} />
                <div className="modalproduct_info">
                    <div className="modalproduct_info_typo">
                        <h2>Product details</h2>
                        <h4>{name}</h4>
                        <p>
                            {description === "" ?
                                <p>No description</p>
                                :
                                <p>{description}</p>
                            }
                        </p>

                    </div>

                    <div className="product_modal_stock">
                        {
                            (instock) ?
                                <p>IN STOCK</p>
                                :
                                <p>NOT IN STOCK</p>}
                        <b>{price} DA</b>
                    </div>



                </div>
            </div>
        </div >
    )
}

export default ModalProduct