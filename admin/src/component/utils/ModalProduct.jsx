import React from 'react'
import "./modal.scss"
const ModalProduct = ({ productDetails, setModal }) => {
    const { _id, name, size, colors, price, type, description, images } = productDetails

    const baseURI = "http://localhost:3004/api/v1"

    return (
        <div className='modal_wrapper' >
            <div className="info_modal px-3 ">
                <div className="close_modal_btn" onClick={() => { setModal(false) }}>
                    X
                </div>
                <p className='my-3 py-1 ' >Informations</p>
                <div className="img_wrapper  border rounded-3">
                    {/* <img className='img-fluid img-responsive h-100 w-100' src={require('../../assets/adidas.png')} alt="logo" /> */}
                    <img className='img-fluid img-responsive h-100 w-100' src={`${baseURI}/${images[0]}`} alt="logo" />
                </div>
                <div className="row p-2  col ">

                    <div className="col-md-6 ">
                        <div className='row'>
                            <b className='' >ID of product :</b>
                            <p>
                                {_id}
                            </p>
                        </div>

                        <div className='row'>
                            <b className='' >Type of product :</b>
                            <p>
                                {type}
                            </p>
                        </div>

                        <div className='row'>
                            <b className='' >Name of product :</b>
                            <p>
                                {name}
                            </p>
                        </div>
                        <div className='row'>
                            <b className='' >Price of product :</b>
                            <p>
                                {price}
                            </p>
                        </div>
                        <div className='row'>
                            <b className='' >color / flavour of product :</b>
                            <div style={{ display: 'flex', gap: "2rem" }} >
                                {colors.map((e, i) => { return (<p key={i} >{e}</p>) })}
                            </div>
                        </div>
                        <div className='row'>
                            <b className='' >size of product :</b>
                            <div style={{ display: 'flex', gap: "2rem" }} >
                                {size.map((e, i) => { return (<p key={i} >{e}</p>) })}
                            </div>
                        </div>
                    </div>
                </div>
                <b className='border-bottom pb-2' >description of product :</b>
                <p className='py-3'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ModalProduct