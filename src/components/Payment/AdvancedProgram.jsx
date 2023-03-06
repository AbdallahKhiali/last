import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProgramPaymentCard from '../utils/ProgramPaymentCard'
// import Secondary from '../utils/Secondary'
import "./PaymentProgram.scss"

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { GeneralContext } from '../../contexts/GeneralContext'

const AdvancedProgram = () => {
    const { baseURI } = useContext(GeneralContext)

    const { title, subtitle, price } = useParams()


    const [customerForm, setCustomerForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        age: "",
        height: "",
        weight: "",
        sickness: "",
        gender: "",
        maritalStatus: "",
        blood: "",
        sleepTime: "",
        wakeTime: "",
        job: "",
        timeSpentWorking: "",
    })

    const customerFormSchema = Yup.object().shape({
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
        age: Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
    });
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    const purchase = (values) => {
        // console.log("data on purchase", { ...values, products: [{ name: title, description: subtitle, price: price }] })
        axios.post(`${baseURI}/users/command/add`, { ...values, products: [{ name: title, description: subtitle, price: price }] }, axiosConfig).then(res => {
            window.location.replace("/thanks")
        }).catch(err => console.log(err))
    }

    // console.log({ ...customerForm, products: { name: title, description: subtitle, price: price } })

    // const handleChange = (e, name) => {
    //     setCustomerForm({ ...customerForm, [name]: e.target.value })
    // }



    return (
        <Formik
            initialValues={{ ...customerForm }}
            validationSchema={customerFormSchema}
            onSubmit={values => {
                // same shape as initial values
                purchase(values)
                // console.log({ ...values });
            }}
        >
            {({ touched, errors, isSubmitting }) => (
                <Form>
                    <div className='payment-program' >
                       
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
                                        <label >Email :</label>
                                        <Field className='form-control' name="email" />
                                        {errors.email && touched.email ? (
                                            <div className="is-invalid" >{errors.email}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "email") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Phone Number  :</label>
                                        <Field className='form-control' name="phoneNumber" />
                                        {errors.phoneNumber && touched.phoneNumber ? (
                                            <div className="is-invalid" >{errors.phoneNumber}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "phoneNumber") }} className='form-control' /> */}
                                    </div>
                                </div>
                            </div>

                            <div className='customer-formulaire' >
                                <h1 className='customer-formulaire-label'>Personnelle information</h1>


                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label > Age :</label>
                                        <Field className='form-control' name="age" />
                                        {errors.age && touched.age ? (
                                            <div className="is-invalid" >{errors.age}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "age") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Height :</label>
                                        <Field className='form-control' name="height" />
                                        {errors.height && touched.height ? (
                                            <div className="is-invalid" >{errors.height}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "height") }} className='form-control' /> */}
                                    </div>
                                </div>


                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label > Weight :</label>
                                        <Field className='form-control' name="weight" />
                                        {errors.weight && touched.weight ? (
                                            <div className="is-invalid" >{errors.weight}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "weight") }} className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >do you have any Sickness :</label>
                                        <Field className='form-control' name="sickness" />
                                        {errors.sickness && touched.sickness ? (
                                            <div className="is-invalid" >{errors.sickness}</div>
                                        ) : null}
                                        {/* <input type='text' onChange={(e) => { handleChange(e, "sickness") }} className='form-control' /> */}
                                    </div>
                                </div>
                                <div className="formulaire-row">

                                    <div className='form-container' >
                                        <label >Gender :</label>
                                        <div className='form-container-radio' >
                                            {/* <input onChange={(e) => { handleChange(e, "gender") }} value="male" type='radio' className='form-radio' name="gender" /> */}
                                            <Field type="radio" name="gender" value="male" className='form-radio' />
                                            <label>Male</label>

                                            {/* <input onChange={(e) => { handleChange(e, "gender") }} value="female" type='radio' className='form-radio' name="gender" /> */}
                                            <Field type="radio" name="gender" value="female" className='form-radio' />
                                            <label>Female</label>
                                        </div>

                                    </div>

                                    <div className='form-container' >
                                        <label >Marital status :</label>
                                        <div className='form-container-radio' >
                                            {/* <input onChange={(e) => { handleChange(e, "maritalStatus") }} value="married" type='radio' className='form-radio' name="marital" /> */}
                                            <Field type="radio" name="maritalStatus" value="married" className='form-radio' />
                                            <label>Maried</label>

                                            {/* <input onChange={(e) => { handleChange(e, "maritalStatus") }} value="single" type='radio' className='form-radio' name="marital" /> */}

                                            <Field type="radio" name="maritalStatus" value="single" className='form-radio' />
                                            <label>Single</label>
                                        </div>

                                    </div>

                                </div>


                                <div className="formulaire-row">

                                    <div className='form-container' >
                                        <label >Blood Group  :</label>
                                        <div className='form-container-radio' >
                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} value="a+" type='radio' className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="a+" className='form-radio' />
                                            <label>A+</label>

                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} value="a-" type='radio' className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="a-" className='form-radio' />
                                            <label>A-</label>

                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} value="b+" type='radio' className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="b+" className='form-radio' />
                                            <label>B+</label>

                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} value="b-" type='radio' className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="b-" className='form-radio' />
                                            <label>B-</label>
                                        </div>

                                    </div>

                                </div>

                                <div className="formulaire-row">

                                    <div className='form-container' >
                                        <div className='form-container-radio' >
                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} type='radio' value="o+" className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="o+" className='form-radio' />
                                            <label>O+</label>

                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} type='radio' value="o-" className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="o-" className='form-radio' />
                                            <label>O-</label>

                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} type='radio' value="ab+" className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="ab+" className='form-radio' />
                                            <label>AB+</label>

                                            {/* <input onChange={(e) => { handleChange(e, "blood") }} type='radio' value="ab-" className='form-radio' name="blood" /> */}
                                            <Field type="radio" name="blood" value="ab-" className='form-radio' />
                                            <label>AB-</label>

                                        </div>
                                    </div>



                                </div>

                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label > Sleep time :</label>
                                        <Field className='form-control' name="sleepTime" />
                                        {errors.sleepTime && touched.sleepTime ? (
                                            <div className="is-invalid" >{errors.sleepTime}</div>
                                        ) : null}
                                        {/* <input onChange={(e) => { handleChange(e, "sleepTime") }} type='text' className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Wake time :</label>
                                        <Field className='form-control' name="wakeTime" />
                                        {errors.wakeTime && touched.wakeTime ? (
                                            <div className="is-invalid" >{errors.wakeTime}</div>
                                        ) : null}
                                        {/* <input onChange={(e) => { handleChange(e, "wakeTime") }} type='text' className='form-control' /> */}
                                    </div>
                                </div>

                                <div className="formulaire-row">
                                    <div className='form-container' >
                                        <label > Job :</label>
                                        <Field className='form-control' name="job" />
                                        {errors.job && touched.job ? (
                                            <div className="is-invalid" >{errors.job}</div>
                                        ) : null}
                                        {/* <input onChange={(e) => { handleChange(e, "job") }} type='text' className='form-control' /> */}
                                    </div>
                                    <div className='form-container' >
                                        <label >Time spent at work :</label>
                                        <Field className='form-control' name="timeSpentWorking" />
                                        {errors.timeSpentWorking && touched.timeSpentWorking ? (
                                            <div className="is-invalid" >{errors.timeSpentWorking}</div>
                                        ) : null}
                                        {/* <input onChange={(e) => { handleChange(e, "timeSpentWorking") }} type='text' className='form-control' /> */}
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

                            </div>
                            <button
                                type="submit"
                                // className="btn primary_btn "
                                className="secondary-button"
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <p>CHECKOUT</p>
                                    <img src={require('../../img/arrows.png')} alt="arrows" style={{ height: '16px' }} />
                                </div>
                            </button>

                        </div>


                        <div className='program-offer' >
                            <ProgramPaymentCard
                                program_title={title}
                                program_subtitle={subtitle}
                                price={price}
                                shipping_cost={0}
                            />
                        </div>
                    </div >
                </Form>
            )}
        </Formik>
    )
}

export default AdvancedProgram