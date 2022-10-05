import React, {useState} from 'react'
import { Modal, ModalHeader } from "reactstrap";
import ListEle from './ListEle';


export default function PopUp(){

    const [modal, setmodal] = useState(false)
        return (
            <div>
                <Modal className='modal-content' size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
                    <ModalHeader toggle={()=>setmodal(!modal)}>
                        <h5> Event Details </h5>
                    </ModalHeader>
                    <div class="row justify-content-center">
                        <div class="col-4">
                            <div className='inbox-head'>
                                <h7> Society </h7>
                                <div className='inbox-ele'>
                                    Celestial Biscuit IGDTUW
                                </div>
                            </div>
                            <div className='inbox-head'>
                                <h7> Date </h7>
                                <div className='inbox-ele'>
                                    Celestial Biscuit IGDTUW
                                </div>
                            </div>
                            <div className='inbox-head'>
                                <h7> Name of Issuer </h7>
                                <div className='inbox-ele'>
                                    Celestial Biscuit IGDTUW
                                </div>
                            </div>
                        </div>
                        <div class="col-4">
                        <div className='inbox-head'>
                                <h7> Society </h7>
                                <div className='inbox-ele'>
                                    Celestial Biscuit IGDTUW
                                </div>
                            </div>
                            <div className='inbox-head'>
                                <h7> Date </h7>
                                <div className='inbox-ele'>
                                    Celestial Biscuit IGDTUW
                                </div>
                            </div>
                            <div className='inbox-head'>
                                <h7> Name of Issuer </h7>
                                <div className='inbox-ele'>
                                    Celestial Biscuit IGDTUW
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>

                <button className='btn mt-3 list-item' onClick={()=>setmodal(true)}>
                    <ListEle />
                </button>
                <button className='btn mt-3 list-item' onClick={()=>setmodal(true)}>
                    <ListEle />
                </button>
                <button className='btn mt-3 list-item' onClick={()=>setmodal(true)}>
                    <ListEle />
                </button>
                <button className='btn mt-3 list-item' onClick={()=>setmodal(true)}>
                    <ListEle />
                </button>
                <button className='btn mt-3 list-item' onClick={()=>setmodal(true)}>
                    <ListEle />
                </button>
                <button className='btn mt-3 list-item' onClick={()=>setmodal(true)}>
                    <ListEle />
                </button>
                
            </div>
     )
}