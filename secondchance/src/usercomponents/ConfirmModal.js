import React from 'react'
import { Container, Row, Col,Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const ConfirmModal = ({show,handleClose,cardname,cardnum,mail,subtotal,uid}) => {
    const nav=useNavigate()

    const order=async()=>{
        const response=await axios.post('http://localhost:8080/user/postorder',{uid,subtotal})
        console.log(response.data.data);       
        nav('/successpage')
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} className='mt-5'>
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col lg={8} className='mt-4'>
                            <h4>Confirm your Payment</h4>
                            <div>Quikly and secure,free transactions.</div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4'>
                        <Col lg={8} className='cfm-details mb-4'>
                            <div className='pt-4 pb-4 ps-2'>
                                <h6>Details </h6>
                                <div className='right-align mt-2'>
                                    <div>cardholder name</div>
                                    <div>{cardname}</div>
                                </div>
                                <div className='right-align mt-2'>
                                    <div>Card Number</div>
                                    <div>{cardnum}</div>
                                </div>
                                <div className='right-align mt-2'>
                                    <div>Email</div>
                                    <div>{mail}</div>
                                </div>
                                <hr></hr>
                                <div className='right-align'>
                                    <div>Total Amount</div>
                                    <div>₹{subtotal}</div>
                                </div>
                            </div>
                        </Col>
                        <Row className='justify-content-center mb-4 mt-2'>
                            <button className='cancel-p pt-2 pb-2' onClick={handleClose}>cancel payment</button>
                            <button type="submit" className='confirm-p ms-3' onClick={order}>confirm payment</button>
                        </Row>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}

export default ConfirmModal