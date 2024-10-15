import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StoreSidebar from './StoreSidebar'
import OrderArea from './OrderArea'
import { useState } from 'react'
import MainNavbar from '../Admincomponents/MainNavbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



const OrderHome = () => {
    const [sidevisible, hideside] = useState(true)

    const changevisibility = () => {
        hideside(!sidevisible)
    }
    const nav=useNavigate()
    useEffect(()=>{
        if(sessionStorage.getItem('said')==""){
            nav('/admin')
        }
    })
    return (
        <>
            <div style={{ height: "100vh", backgroundColor: "rgb(243, 243, 243)" }}>
                <Container fluid>
                    <Row>
                        <StoreSidebar sidevisible={sidevisible} />
                        <Col lg={sidevisible ? 9 : 12}>
                            <Row style={{ backgroundColor: "white", height: "90px" }}>
                                <MainNavbar changevisibility={changevisibility} sidevisible={sidevisible} />
                            </Row>
                            <OrderArea />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default OrderHome