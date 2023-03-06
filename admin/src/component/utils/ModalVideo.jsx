import React from 'react'
import "./modal.scss"
const ModalVideo = ({ videoDetails, setModal }) => {
    const { _id, title, link, image } = videoDetails
    const baseURI = "http://localhost:3004/api/v1"


    return (
        <div className='modal_wrapper' >
            
            <div className="info_modal px-3 ">
                <div className="close_modal_btn" onClick={() => { setModal(false) }}>
                    X
                </div>
                <p className='my-3 py-1 ' >Informations</p>
                <div className="img_wrapper  border rounded-3">
                    <img className='img-fluid img-responsive h-100 w-100' src={baseURI+"/"+ image} alt="pic of video" />
                </div>
                <div className="row p-2  col ">

                    <div className="col-md-6 ">
                        <div className='row'>
                            <b className='' >ID of video :</b>
                            <p>
                                {_id}
                            </p>
                        </div>

                        <div className='row'>
                            <b className='' >Name of video :</b>
                            <p>
                                {title}
                            </p>
                        </div>
                        <div className='row'>
                            <b className='' >link of video :</b>
                            <p>
                                {link}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVideo