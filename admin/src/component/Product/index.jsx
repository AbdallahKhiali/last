import axios from 'axios'
import ModalProduct from '../utils/ModalProduct'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../style/page.scss"
import { Context } from '../../context/Context'
const Product = () => {

    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState()

    const baseURI = "http://localhost:3004/api/v1"


    const { axiosConfig } = useContext(Context)



    useEffect(() => {
        axios.get(`${baseURI}/product/all`).then((res) => {
            setProducts(res.data)
        }).catch((err) => { console.log(err) })
    }, [products])



    const deleteproduct = (id) => {
        axios.delete(`${baseURI}/product/${id}`, axiosConfig).then((res) => {
            // console.log("product deleted")
            window.location.reload()

        }).catch((err) => { console.log(err) })
    }

    const [modal, setModal] = useState(false)




    return (
        <div className='page' >

            {
                modal && <ModalProduct setModal={setModal} productDetails={productDetails} />
            }
            <p className='page_label'>Product</p>
            <a href="/admin/product/create" className="add_button">+</a>
            <table className="table table-dark table-hover ">
                <thead >
                    <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">Picture</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map(({ _id, name, size, colors, price, type, description, images }, i) => {
                            return (
                                <tr key={i} >
                                    {/* <th scope="row">{_id}</th> */}
                                    <td className='d-flex justify-content-center ' >
                                        <img src={`${baseURI}/${images[0]}`} height={75} width={75} />
                                    </td>
                                    <td  >{name}</td>
                                    <td  >{price}</td>
                                    <td  >{type}</td>
                                    <td  >
                                        <Link to={`/admin/product/update/${_id}`}  className="btn btn-primary mx-1">update</Link>
                                        <button type="button" className="btn btn-info mx-1" onClick={() => { setProductDetails({ _id, name, price, type, description, images, size, colors }); setModal(true) }}>details</button>
                                        <button onClick={() => { deleteproduct(_id) }} type="button" className="btn btn-danger mx-1"  >delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Product