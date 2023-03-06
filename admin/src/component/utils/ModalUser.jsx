import React from 'react'
import "./modal.scss"
const ModalUser = ({ userDetails, setModal }) => {
    const { _id, lastname, firstname, email } = userDetails

    return (
        <div className='modal_wrapper' >

            <div className="info_modal px-3 ">
                <div className="close_modal_btn" onClick={() => { setModal(false) }}>
                    X
                </div>
                <p className='my-3 py-1 ' >Informations</p>
                <div className="row p-2  col ">

                    <div className="col-md-6 ">
                        <div className='row'>
                            <b className='' >ID of User :</b>
                            <p>
                                {_id}
                            </p>
                        </div>


                        <div className='row'>
                            <b className='' >First Name of User :</b>
                            <p>
                                {firstname}
                            </p>
                        </div>
                        <div className='row'>
                            <b className='' >Last Name of User :</b>
                            <p>
                                {lastname}
                            </p>
                        </div>

                        <div className='row'>
                            <b className='' >Email of User :</b>
                            <p>
                                {email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalUser