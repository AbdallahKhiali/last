import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GeneralContext } from '../../contexts/GeneralContext'
import Secondary from "../utils/Secondary"


const AddedToBagModal = ({ setAddedToBagModal, addedProduct }) => {

    const { baseURI } = useContext(GeneralContext)

    return (
        <div className='addedToBagModal_wrapper' >


            <div className="addedToBagModal">
                <div className='closebtn' onClick={() => { setAddedToBagModal(false) }}  >
                    <img src={require('../../img/close.svg').default} alt="close" />
                </div>
                <div className='addedToBagModal_label'>
                    <img alt="true" className='modal_true' src={require('../../img/true.png')} />
                    <h1 className='addedToBagModal_label_title' >
                        ITEM ADDED TO BAG
                    </h1>
                </div>

                <div className='addedToBagModal_info'>

                    {
                        (addedProduct.picture) ?
                            <img alt="women_store" src={`${baseURI}/${addedProduct.picture}`} />
                            :
                            <img alt="women_store" src={require('../../img/women_store.png')} />
                    }
                    <div className='addedToBagModal_info_label'>
                        <h1 >{addedProduct?.name}</h1>
                        <p className='addedToBagModal_info_label_categorie' >BODYETIC</p>
                        <div className="divider" />
                        <div className="addedToBagModal_info_label_row">
                            <h3>
                                <b>Product :  </b>
                            </h3>
                            <p>{addedProduct?.name}</p>
                        </div>
                        <div className="addedToBagModal_info_label_row">
                            <h3>
                                <b>Size : </b>
                            </h3>
                            <p>{addedProduct?.size}</p>
                        </div>

                        <div className="addedToBagModal_info_label_row">
                            <h3>
                                <b>In stock : </b>
                            </h3>
                            <p>{addedProduct.price}DA</p>
                        </div>


                    </div>


                </div>

                <div className="button_container">
                    <Link className='view_link' to="/shopping_bag">VIEW BAG</Link>
                    <Secondary  >
                        <a href="/payment_bag" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
                            <p>CHECKOUT</p>
                            <img src={require('../../img/arrows.png')} alt="arrows" style={{ height: '16px' }} />
                        </a>
                    </Secondary>

                </div>
            </div>
        </div>
    )
}

export default AddedToBagModal