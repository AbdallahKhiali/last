import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context';
import "../../style/page.scss"
import Loading from '../utils/Loading';
const CreateProduct = () => {

    const [val, setVal] = useState([]);
    const [colors, setColors] = useState([]);
    const [images, setImages] = useState([]);

    //add inputs with values for size


    const handleAdd = () => {
        const abc = [...val, []]
        setVal(abc)
    }
    const handleChange = (onChangeValue, i) => {
        const inputdata = [...val]
        inputdata[i] = onChangeValue.target.value;
        setVal(inputdata)
    }
    const handleDelete = (i) => {
        const deletVal = [...val]
        deletVal.splice(i, 1)
        setVal(deletVal)
    }

    //add inputs with values for colors

    const handleAddColors = () => {
        const abc = [...colors, []]
        setColors(abc)
    }

    const handleChangeColors = (onChangeValue, i) => {
        const inputdata = [...colors]
        inputdata[i] = onChangeValue.target.value;
        setColors(inputdata)
    }

    const handleDeleteColors = (i) => {
        const deletVal = [...colors]
        deletVal.splice(i, 1)
        setColors(deletVal)
    }


    const [productForm, setProductForm] = useState({
        name: "",
        price: 0,
        instock: true,
        type: "gainer",
        size: [],
        description: "",
        images: [],
    })
    const baseURI = "http://localhost:3004/api/v1"


    const token = JSON.parse(localStorage.getItem('token'))



    const [files, setFiles] = useState([])


    const { axiosConfig, loading, setLoading } = useContext(Context)


    const onInputChange = (e, fieldName) => {
        setProductForm({ ...productForm, [fieldName]: e.target.value })
    }

    const postDetails = async () => {

        const formData = new FormData();
        files.forEach((image, index) => {
            formData.append('images', image);
        });


        formData.append('name', productForm.name);
        formData.append('price', productForm.price);
        formData.append('instock', productForm.instock);
        formData.append('description', productForm.description);
        formData.append('type', productForm.type);
        val.forEach((val, index) => {
            formData.append('size', val);
        });
        colors.forEach((color, index) => {
            formData.append('colors', color);
        });

        axios.post(`${baseURI}/product/add`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=your-boundary-string',
                "Authorization": "Bearer " + token
            }
        }).then((res) => { console.log("success!"); setLoading(false); window.location.replace("/admin/product") })
            .catch(() => { console.log("fail!"); setLoading(false); alert("fail") })
    };


    return (
        <div className='page' >
            <p className='page_label'>Create Product</p>
            {
                loading && <Loading />
            }
            <div className="col-md-12 ">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Product</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={(e) => onInputChange(e, 'name')} className="form-control" />
                    </div>
                </div>
                <div className=" row mb-3 ">
                    <label className="col-sm-2 col-form-label">Price</label>
                    <div className="col-sm-10">
                        <input type="Number" onChange={(e) => onInputChange(e, 'price')} className="form-control" />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Type</label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' onChange={(e) => onInputChange(e, 'type')} >
                            <option className='h-100 w-100 ps-3 ' value="gainer" >gainer</option>
                            <option className='h-100 w-100 ps-3 ' value="clothe" >clothe</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <textarea className=' w-100' onChange={(e) => onInputChange(e, 'description')} />
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">In stock</label>
                    <div className="col-sm-10">
                        <select className='h-100 w-100 ps-3' onChange={(e) => onInputChange(e, 'instock')} >
                            <option className='h-100 w-100 ps-3 ' value={true} >true</option>
                            <option className='h-100 w-100 ps-3 ' value={false} >false</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Size </label>
                    <div className="col-sm-10" >
                        <button className='btn btn-success' onClick={() => handleAdd()}>Add</button>
                        {val.map((data, i) => {
                            return (
                                <>
                                    <input className='ms-1 py-1 col-md-3  ps-3' value={data} onChange={e => handleChange(e, i)} />
                                    <button className='btn btn-danger' onClick={() => handleDelete(i)}>x</button>
                                </>
                            )
                        })}
                    </div>
                </div>


                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Colors/Flavour :  </label>
                    <div className="col-sm-10" >
                        <button className='btn btn-success' onClick={() => handleAddColors()}>Add</button>
                        {colors.map((valeurs, i) => {
                            return (
                                <>
                                    <input className='ms-1 py-1 col-md-3  ps-3' value={valeurs} onChange={e => handleChangeColors(e, i)} />
                                    <button className='btn btn-danger' onClick={() => handleDeleteColors(i)}>x</button>
                                </>
                            )
                        })}
                    </div>
                </div>


                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Pictures</label>
                    <div className="col-sm-10">
                        <div className="mb-3">
                            {/* <input className="form-control form-control-sm" id="formFileSm" type="file" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} /> */}
                            <input className="form-control form-control-sm" id="formFileSm" type="file" name="images" multiple accept="image/*" onChange={e => setFiles(Array.from(e.target.files))} />
                        </div>
                    </div>
                </div>


                <div className="row mb-3">
                    <div className="w-100 ">
                        {/* <button className='btn  btn-dark w-100 ' onClick={() => { setLoading(true); postDetails() }} >submit</button> */}
                        <button className='btn  btn-dark w-100 ' onClick={() => { setLoading(true); postDetails() }} >submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}




export default CreateProduct