import React, { useContext, useEffect, useState } from 'react'
// import Secondary from '../utils/Secondary'
import "./PaymentProgram.scss"
// import emailjs from '@emailjs/browser';
import axios from 'axios';
import { GeneralContext } from '../../contexts/GeneralContext';
import Loading from '../Loading';


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const CheckoutBag = () => {

    const [bag, setBag] = useState([])

    const [customerForm, setCustomerForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        wilaya: "",
        commune: "",
        postCode: "",
        adresse: "",
    })






    const { baseURI, loading, setLoading } = useContext(GeneralContext)




    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setBag(cart)
    }, [])

    const itemsCost = bag && bag.map(item => { return item.price * item.quantity })
    const getTotal = () => {
        let total = 0
        for (let i = 0; i < itemsCost.length; i++) {
            total += itemsCost[i]
        }
        return total

    }
    const total = getTotal()

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0ZWI3MjYwNmVmMTVmZjFhOWU5ODQiLCJpYXQiOjE2NzA3Njc5NTl9.0UY8M6MpTBGje9xiRLM92SNH1YXV1tfxPWtqTfYgT3E`
        }
    };

    const purchase = (values) => {
        // console.log({ ...values, products: { ...bag } })
        // setLoading(true)
        axios.post(`${baseURI}/users/command/add`, { ...values, products: [...bag] }, axiosConfig).then(res => {
            // setcartProducts(res.data)
            // console.log('ok done')
            // console.log('sending', { ...customerForm, products: { ...bag } })
            setLoading(true)
            localStorage.setItem('cart', [])
            window.location.replace('/thanks')
        }).catch(err => console.log(err))
    }

    const handleChange = (e, name) => {
        const value = e.target.value
        setCustomerForm({ ...customerForm, [name]: value })

    }


    const checkoutValidation = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phoneNumber: Yup.string().min(2, 'Too Short!')
            .max(15, 'Too Long!')
            .required('Required'),
        wilaya: Yup.string().required('Required'),
    });


    return (
        <Formik
            initialValues={{ ...customerForm }}
            validationSchema={checkoutValidation}
            onSubmit={(values) => { purchase(values) }}
        // onSubmit={(values) => { console.log(values) }}
        >
            {/* {({ touched, errors, isSubmitting }) => ( */}
            {({ touched, errors, isSubmitting, values }) => (
                <Form >
                    <div className='payment-program' >
                        {
                            loading && <Loading />

                        }
                        <div className='costumer' >
                            <div className='costumer-typo' >
                                <img src={require('../../img/black-logo.png')} alt="costumer-typo-logo" className='costumer-typo-img' />
                                <h1 className='costumer-typo-label' > checkout </h1>
                            </div>
                            <div className='customer-formulaire' >
                                <h1 className='customer-formulaire-label'>Customer</h1>
                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label >First Name :</label>
                                        <Field className='form-control' name="firstName" />
                                        {errors.firstName && touched.firstName ? (
                                            <div className="is-invalid" >{errors.firstName}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "firstName") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Last Name :</label>
                                        <Field className='form-control' name="lastName" />
                                        {errors.lastName && touched.lastName ? (
                                            <div className="is-invalid" >{errors.lastName}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "lastName") }} className='form-control' /> */}
                                    </div>
                                </div>

                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label >email :</label>
                                        <Field className='form-control' name="email" />
                                        {errors.email && touched.email ? (
                                            <div className="is-invalid" >{errors.email}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "email") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Phone Number :</label>
                                        <Field className='form-control' name="phoneNumber" />
                                        {errors.phoneNumber && touched.phoneNumber ? (
                                            <div className="is-invalid" >{errors.phoneNumber}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "phoneNumber") }} className='form-control' /> */}
                                    </div>
                                </div>
                            </div>

                            <div className='customer-formulaire' >
                                <h1 className='customer-formulaire-label'>Delivery adress</h1>
                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label >Wilaya :</label>
                                        <Field className='form-control' name="wilaya" />
                                        {errors.wilaya && touched.wilaya ? (
                                            <div className="is-invalid" >{errors.wilaya}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "wilaya") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Commune :</label>
                                        <Field className='form-control' name="commune" />
                                        {errors.commune && touched.commune ? (
                                            <div className="is-invalid" >{errors.commune}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "commune") }} className='form-control' /> */}
                                    </div>
                                </div>


                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label >Postcode :</label>
                                        <Field className='form-control' name="postCode" />
                                        {errors.postCode && touched.postCode ? (
                                            <div className="is-invalid" >{errors.postCode}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "postCode") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Adresse :</label>
                                        <Field className='form-control' name="adresse" />
                                        {errors.adresse && touched.adresse ? (
                                            <div className="is-invalid" >{errors.adresse}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "adresse") }} className='form-control' /> */}
                                    </div>
                                </div>
                            </div>





                            <div className='customer-formulaire' >
                                <h1 className='customer-formulaire-label'>Delivery options</h1>
                                <div className="formulaire-row">

                                    <div className='form-container' >
                                        <label >Payment :</label>
                                        <div className='form-container-radio' >
                                            <input type='radio' className='form-radio' name="payment" />
                                            <label>Cash on delivery</label>
                                        </div>

                                    </div>

                                </div>


                                <button
                                    type="submit"
                                    // disabled={isSubmitting}
                                    className="secondary-button"
                                >
                                    <div
                                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}  >
                                        <p>CHECKOUT</p>
                                        <img src={require('../../img/arrows.png')} alt="arrows" style={{ height: '16px' }} />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='program-offer' >

                            <div className="offer">
                                {
                                    bag && bag?.map(({ picture, price, name, quantity }, i) => {
                                        return (
                                            <div key={i} className="offer-inner">
                                                <div className="offer-inner-content">
                                                    <div className="offer-inner-content-thumbnail">
                                                        <img alt="offer" src={`${baseURI}/${picture}`} />
                                                    </div>
                                                    <div className="offer-inner-content-info">
                                                        <p className='offer-inner-content-info-label' >{name}</p>
                                                        <p className='offer-inner-content-info-label' >x{quantity} - {price * quantity} DA </p>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>

                            <div className="offer-element">
                                <h2>ORDER TOTAL TTC </h2>
                                <p>{total} DA </p>
                            </div>
                        </div>
                    </div>
                </Form>
            )
            }


        </Formik >
    )
}

export default CheckoutBag