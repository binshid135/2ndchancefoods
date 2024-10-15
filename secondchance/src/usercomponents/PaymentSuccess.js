import React from 'react'
import { Container, Row, Modal, Col } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {

    

    const nav=useNavigate()

    const uid=sessionStorage.getItem('uid')
    useEffect(() => {
        if(uid==''){
            nav('/login')
        }
      })

    return (
        <>
            <Modal show className='mt-5'>
                <Container fluid>
                    <Row className='justify-content-center mt-3'>
                        <Col lg={7}>
                            <img src="./payments.png" height="220px" width="260px"></img>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={5}>
                            <h6 style={{fontWeight:"800"}} className='ms-3'>Payment Successfull</h6>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <div className='ms-4 pay-msg'>Your transaction of rs.200 is completed</div>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4 mb-5 ms-1'>
                        <Col lg={8}>
                            <button className='shop-more' onClick={()=>nav('/')}>Shop more</button>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}

export default PaymentSuccess