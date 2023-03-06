import React, { useContext, useEffect, useState } from 'react'
import "./ProductDetails.scss"
import Secondary from "../utils/Secondary"
import ModalProduct from '../utils/ModalProduct'
import AddedToBagModal from '../utils/AddedToBagModal'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Loading'
import { GeneralContext } from '../../contexts/GeneralContext'
import { OptionaryButton } from '../utils/OptionaryButton'

const ProductDetails = () => {

    const { id } = useParams();

    const { cart, baseURI } = useContext(GeneralContext)

    const [currentProduct, setCurrentProduct] = useState()


    const [productSize, setProductSize] = useState(null)
    const [productColor, setProductColor] = useState("")
    const [productQuantity, setProductQuantity] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [addedProduct, setAddedProduct] = useState(null)

    const [modalProduct, setModalProduct] = useState(false);
    const [addedToBagModal, setAddedToBagModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0)

    const nextImage = () => {
        if (selectedImage === currentProduct.images.length - 1) {
            setSelectedImage(0)

        } else {
            setSelectedImage(selectedImage => selectedImage + 1)
        }
    }

    const previousImage = () => {
        if (selectedImage === 0) {
            setSelectedImage(currentProduct.images.length - 1)

        } else {
            setSelectedImage(selectedImage => selectedImage - 1)
        }
    }


    useEffect(() => {
        axios.get(`${baseURI}/product/${id}`).then(res => {
            setCurrentProduct(res.data)
            setIsLoading(false)
        }).catch(err => console.log(err))

    }, [currentProduct])




    const sendProductToCart = () => {
        let product = {
            _id: currentProduct._id,
            name: currentProduct.name,
            price: currentProduct.price,
            // picture: currentProduct.picture,
            picture: currentProduct.images[0],
            size: productSize,
            quantity: productQuantity,
            colors: productColor
        }

        const exist = cart.filter(element => element._id == product._id && element.size == product.size)

        let cartWithoutExist = cart.filter(x => !exist.includes(x))

        if (exist.length > 0) {

            let modifiedProduct = {
                ...exist[0],
                quantity: parseInt(productQuantity) + parseInt(exist[0].quantity),
            }
            cartWithoutExist.push(modifiedProduct)
            localStorage.setItem('cart', JSON.stringify(cartWithoutExist));
        } else {
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }

    const openModal = () => {
        setModalProduct(!modalProduct)
    }

    const openAddToBagModal = () => {
        sendProductToCart()
        setAddedToBagModal(!addedToBagModal)
    }


    return (

        <div className='productDetails' >

            {
                (isLoading) ?
                    <Loading />
                    :
                    <>
                        {
                            modalProduct && <ModalProduct instock={currentProduct.instock} picture={currentProduct.images[0]} price={currentProduct.price} name={currentProduct.name} description={currentProduct.description} action={openModal} />
                        }
                        {
                            addedToBagModal && <AddedToBagModal addedProduct={addedProduct} setAddedToBagModal={setAddedToBagModal} action={openAddToBagModal} />
                        }
                        <div className='productDetailsImages' >

                            <img src={require('../../img/next.svg').default} alt="svg" className='productImageArrow previous ' onClick={() => { previousImage() }} />
                            <img src={require('../../img/next.svg').default} alt="svg" className='productImageArrow next' onClick={() => { nextImage() }} />
                            <div className="productDetailsSecondaryImages">
                                {
                                    currentProduct.images.map((image, index) => {
                                        return <img key={index} src={`${baseURI}/${image}`} alt="product-img" onClick={() => { setSelectedImage(index) }} />
                                    })

                                }
                            </div>
                            <img src={`${baseURI}/${currentProduct.images[selectedImage]}`} alt="product-img" className='productDetailsImage' />
                        </div>
                        <div className="productDetailsInfo">
                            <h1 className='productDetailsName' >{currentProduct.name}</h1>
                            <p className='productDetailsLabel'>Bodyetic</p>
                            <div className='productDetailsProduct' >
                                <div className='productDetailsDisponibilite' >
                                    {
                                        currentProduct?.instock ?
                                            <div className='stock_content'  >
                                                <div className='stock_disponibilte instock' ></div>
                                                <div>IN STOCK</div>
                                                <p className='productDetailsPrice'>{currentProduct.price} DA</p>

                                            </div>
                                            :
                                            <div className='stock_content' >
                                                <div className='stock_disponibilte notInstock' ></div>
                                                <div>NOT IN STOCK</div>
                                                <p className='productDetailsPrice'>{currentProduct.price} DA</p>
                                            </div>
                                    }
                                </div>
                            </div>


                            <div className="product_details_inner_colors">
                                {
                                    currentProduct.type === 'gainer' ?
                                        < label >
                                            Flavour :
                                        </label>
                                        :
                                        < label > Colors : </label>
                                }
                                <div className='color_wrapper' >
                                    {
                                        currentProduct?.colors.map((e, i) => {
                                            return (
                                                <div key={i} className={(productColor === e) ? " active_size color" : "color"} onClick={() => { setProductColor(e) }}  >
                                                    {e}
                                                    <input type="radio" name="radio_color" value={e} onChange={(e) => { setProductColor(e.target.value) }} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='buttons_container' >

                                <div className='productDetailsInfoQuantity' >
                                    <b> Quantity : </b>
                                    <div className="counter">
                                        <button disabled={productQuantity <= 1} className="counter_btn" onClick={() => { setProductQuantity(productQuantity => productQuantity - 1) }}>-</button>
                                        <div className="counter_count">{productQuantity}</div>
                                        <button className="counter_btn" onClick={() => { setProductQuantity(productQuantity => productQuantity + 1) }}>+</button>
                                    </div>
                                </div>


                                <div className="product_details_inner_sizes">
                                    <label>select size : </label>
                                    <div className='size_wrapper' >
                                        {
                                            currentProduct.type === 'gainer' ?
                                                currentProduct?.size.map((item, i) => {
                                                    return (
                                                        <div key={i} className={(productSize === item) ? "gainersize active_size" : "gainersize"} onClick={() => { setProductSize(item) }}  >
                                                            <img src={require('../../img/bocal.png')} className="bocal" />
                                                            {item}
                                                            <input type="radio" name="radio_size" value={item} onChange={(e) => { setProductSize(e.target.value) }} />
                                                        </div>
                                                    )
                                                })
                                                :
                                                currentProduct?.size.map((e, i) => {
                                                    return (
                                                        <div key={i} className={(productSize === e) ? "size active_size" : "size"} onClick={() => { setProductSize(e) }}  >
                                                            {e}
                                                            <input type="radio" name="radio_size" value={e} onChange={(e) => { setProductSize(e.target.value) }} />
                                                        </div>
                                                    )
                                                })
                                        }
                                    </div>
                                </div>



                                <Secondary action={() => {
                                    setAddedProduct({
                                        _id: currentProduct._id,
                                        name: currentProduct.name,
                                        price: currentProduct.price,
                                        picture: currentProduct.images[0],
                                        size: productSize,
                                        quantity: productQuantity,
                                        colors: productColor,
                                    });
                                    openAddToBagModal()
                                }}  >
                                    <p>Add to bag</p>
                                    <img alt="img-btn" src={require('../../img/bag.png')} />
                                </Secondary>

                                <div className='productDetailsOptions'  >
                                    <OptionaryButton style={{ borderRadius: '12px', backgroundColor: "#FFB00D30", height: '56px', color: "#000" }} >
                                        <img alt="img-btn" src={require('../../img/delivery.svg').default} />
                                        <p>Free Delivery </p>
                                    </OptionaryButton>

                                    <OptionaryButton action={openModal} style={{ borderRadius: '12px', fontSize: '13px', height: '56px', color: "#000", fontWeight: "900" }} >
                                        <p>Product Details</p>
                                        <img alt="img-btn" src={require('../../img/add_btn.svg').default} />
                                    </OptionaryButton>
                                </div>
                            </div>

                        </div>
                    </>
            }

        </div >


    )
}

export default ProductDetails

