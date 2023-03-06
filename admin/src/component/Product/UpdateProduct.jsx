import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/Context'
import "../../style/page.scss"
import Loading from '../utils/Loading'
const UpdateProduct = () => {


    const [currentProduct, setCurrentProduct] = useState()

    const baseURI = "http://localhost:3004/api/v1"

    const onInputChange = (e, fieldName) => {
        setCurrentProduct({ ...currentProduct, [fieldName]: e.target.value })
    }





    const { id } = useParams()
    const { axiosConfig, loading, setLoading } = useContext(Context)
    const token = JSON.parse(localStorage.getItem('token'))
    // const [files, setFiles] = useState([])




    useEffect(() => {
        axios.get(`${baseURI}/product/${id}`,).then((res) => {
            console.log(res.data)
            setCurrentProduct(res.data)
            setSelectedOptions(res.data.colors)
            setSelectedSizes(res.data.size)
        }).catch((err) => { console.log(err) })
    }, [])



    const UpdateProduct = () => {


        const formData = new FormData();
        currentProduct.images.forEach((image, index) => {
            formData.append('images', image);
        });


        formData.append('name', currentProduct?.name);
        formData.append('price', currentProduct?.price);
        formData.append('instock', currentProduct?.instock);
        formData.append('description', currentProduct?.description);
        formData.append('type', currentProduct?.type);
        formData.append('colors', selectedOptions);
        formData.append('size', selectedSizes);




        axios.put(`${baseURI}/product/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=your-boundary-string',
                "Authorization": "Bearer " + token
            }
        }).then((res) => { setLoading(false); window.location.replace("/admin/product")    })
            .catch(() => { setLoading(false); alert("fail") })



    }


    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);


    const handleOptionChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {

            setSelectedOptions([...selectedOptions, value]);
        } else {
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        }
    };
    const handleSizeChange = (event) => {
        const value = event.target.value;
        if (event.target.checked) {

            setSelectedSizes([...selectedSizes, value]);
        } else {
            setSelectedSizes(selectedSizes.filter((option) => option !== value));
        }
    };


    return (
        <div className='page' >

            {
                loading && <Loading />
            }

            <p className='page_label'>Update Product</p>
            <div className="col-md-12 ">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product</label>
                    <div className="col-sm-10">
                        <input type="text" value={currentProduct?.name} onChange={(e) => onInputChange(e, 'name')} className="form-control" />
                    </div>
                </div>
                <div className=" row mb-3 ">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="Number" value={currentProduct?.price} onChange={(e) => onInputChange(e, 'price')} className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' onChange={(e) => onInputChange(e, 'type')}  >
                            <option value={"gainer"} className='h-100 w-100 ps-3 '>gainer</option>
                            <option value={"clothe"} className='h-100 w-100 ps-3 '>clothe</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className=' w-100' value={currentProduct?.description} onChange={(e) => onInputChange(e, 'description')} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">In stock</label>
                    <p>{currentProduct?.instock}</p>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' value={currentProduct?.instock} onChange={(e) => onInputChange(e, 'instock')}   >
                            <option className='h-100 w-100 ps-3  ' value={true}  >true</option>
                            <option className='h-100 w-100 ps-3  ' value={false}  >false</option>
                        </select>
                    </div>
                </div>


                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">colors</label>
                    <div className="col-sm-10">
                        {
                            selectedOptions?.map((color, index) => {
                                return (
                                    <label key={index} className="mx-2" >
                                        <input type="checkbox" className="mx-1" value={color} checked={selectedOptions.includes(color)} onChange={handleOptionChange} />
                                        {color}
                                    </label>
                                )
                            })
                        }

                    </div>
                </div>


                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">colors</label>
                    <div className="col-sm-10">
                        {
                            selectedSizes?.map((size, index) => {
                                return (
                                    <label key={index} className="mx-2 " >
                                        <input className="mx-1 " type="checkbox" value={size} checked={selectedSizes.includes(size)} onChange={handleSizeChange} />
                                        {size}
                                    </label>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Pictures</label>
                    <div className="col-sm-10">
                        <div className="mb-3">
                            {
                                currentProduct?.images?.map((path, index) => {
                                    return <img key={index} src={baseURI + '/' + path} className="update-product-img" />
                                })
                            }
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Pictures</label>
                        <div className="col-sm-10">
                            <div className="mb-3">
                                <input className="form-control form-control-sm" id="formFileSm" type="file" name="images" multiple accept="image/*" onChange={e => setCurrentProduct({ ...currentProduct, images: Array.from(e.target.files) })} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="w-100 ">
                        <button className='btn  btn-dark w-100 ' onClick={() => { setLoading(true); UpdateProduct() }} >submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UpdateProduct