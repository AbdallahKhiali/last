import React from 'react'
import "./modal.scss"
const ModalCommand = ({ commandsDetails, setModal }) => {
    const baseURI = "http://localhost:3004/api/v1"

    const { _id, commune, wilaya, adresse, lastName, firstName, phoneNumber, email, products, age, height, weight, sickness, sleepTime, wakeTime, job, timeSpentWorking, maritalStatus, blood, gender } = commandsDetails
    // console.log(commandsDetails)

    return (
        <div className='modal_wrapper' >
            {/* {
                console.log(description, picture)
            } */}
            <div className="info_modal px-3 ">
                <div className="close_modal_btn" onClick={() => { setModal(false) }}>
                    X
                </div>

                <div className="row col-md-12 my-2 rounded-3 p-3 border  ">
                    <p className='my-3 py-3 bg-dark text-white p-3 ' >USER Informations</p>
                    <div className="row  col-md-6">

                        <div >
                            <b>Nom et prenom : </b>
                            <p> {firstName} {lastName} </p>
                        </div>
                        <div >
                            <b>Age : </b>
                            <p> {age} </p>
                        </div>
                        <div>
                            <b>Email : </b>
                            <p> {email} </p>
                        </div>
                        <div>
                            <b>Phone  : </b>
                            <p> {phoneNumber}</p>
                        </div>
                        <div>
                            <b>Wilaya et commune  : </b>
                            <p> {wilaya} - {commune} </p>
                        </div>
                        <div>
                            <b>Adress : </b>
                            <p> {adresse}</p>
                        </div>
                    </div>
                    <div className="row col-md-6 ">
                        <div>
                            <b>height : </b>
                            <p> {height}</p>
                        </div>
                        <div>
                            <b>weight : </b>
                            <p> {weight}</p>
                        </div>
                        <div>
                            <b>sickness : </b>
                            <p> {sickness}</p>
                        </div>
                        <div>
                            <b>marital status : </b>
                            <p> {maritalStatus}</p>
                        </div>

                        <div>
                            <b>blood : </b>
                            <p> {blood}</p>
                        </div>
                        <div>
                            <b>gender : </b>
                            <p> {gender}</p>
                        </div>
                        <div>
                            <b>time spent work : </b>
                            <p> {timeSpentWorking}</p>
                        </div>
                        <div>
                            <b>wake time : </b>
                            <p> {wakeTime}</p>
                        </div>
                        <div>
                            <b>sleep time : </b>
                            <p> {sleepTime}</p>
                        </div>
                        <div>
                            <b>job : </b>
                            <p> {job}</p>
                        </div>

                    </div>


                </div>

                <div className="col-md-12 my-2 rounded-3 p-3 border " >
                    <p className='my-3 py-3 bg-dark text-white p-3 '>products informations</p>
                    {
                        products && products?.map(({ size, description, colors, picture, price, quantity, name }, i) => {
                            return (
                                <div className='bg-primary d-flex  m-3 p-5 rounded-2' >
                                    <div className='col-md-4' >
                                        <img src={baseURI + "/" + picture} className="img-fluid img-responsive h-100 w-100" alt="command-pic" />
                                    </div>
                                    <div className='col-md-8' >
                                        <div className=' py-3 px-3 text-white bg-dark'>
                                            <b>name : {name} </b>
                                        </div>
                                        <div className='py-3 px-3  text-white bg-dark'>
                                            <b>quantity : {quantity} </b>
                                        </div>
                                        <div className='py-3 px-3  text-white bg-dark'>
                                            <b>price : {price} ( price of the article )   </b>
                                        </div>
                                        {
                                            quantity > 0 ?
                                                <></>
                                                :
                                                <div className='py-3 px-3  text-white bg-dark'>
                                                    <b>total price of the command : {parseInt(price) * parseInt(quantity)} </b>
                                                </div>
                                        }
                                        <div className='py-3 px-3  text-white bg-dark'>
                                            <b>color : {colors} </b>
                                        </div>
                                        <div className='py-3 px-3  text-white bg-dark'>
                                            <b>size : {size} </b>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>





            </div>
        </div>
    )
}

export default ModalCommand