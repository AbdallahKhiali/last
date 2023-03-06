import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProgramPaymentCard from '../utils/ProgramPaymentCard'
import "./PaymentProgram.scss"


import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { GeneralContext } from '../../contexts/GeneralContext'



const PaymentProgram = () => {

  const { baseURI } = useContext(GeneralContext)

  const [customerForm, setCustomerForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
  });

  const handleChange = (e, name) => {
    setCustomerForm({ ...customerForm, [name]: e.target.value })
  }


  const { title, price, subtitle } = useParams()
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
    }
  };
  const purchase = (values) => {
    // console.log(values)
    axios.post(`${baseURI}/users/command/add`, { ...values, products: [{ name: title, description: subtitle, price: price }] }, axiosConfig).then(res => {
      // console.log('success', res)
      window.location.replace("/thanks")
    }).catch(err => console.log(err))
  }



  return (
    <Formik
      initialValues={{ ...customerForm }}
      validationSchema={customerFormSchema}
      onSubmit={values => {
        // same shape as initial values
        purchase(values)
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
                    {/* <input onChange={(e) => { handleChange(e, "firstName") }} type='text' className='form-control' /> */}
                  </div>
                  <div className='form-container' >
                    <label >Last Name :</label>
                    <Field className='form-control' name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      <div className="is-invalid" >{errors.lastName}</div>
                    ) : null}
                    {/* <input onChange={(e) => { handleChange(e, "lastName") }} type='text' className='form-control' /> */}
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
                <h1 className='customer-formulaire-label'>Personnelle information</h1>
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
                className="secondary-button"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}  >
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
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default PaymentProgram