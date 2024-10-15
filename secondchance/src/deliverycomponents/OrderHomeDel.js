import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import DeliverySidebar from './DeliverySidebar'
import OrderAreaDel from './OrderAreaDel'
import MainNavbar from '../Admincomponents/MainNavbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



const OrderHomeDel = () => {
    const nav = useNavigate()
    useEffect(() => {
        if (sessionStorage.getItem('did') == "") {
            nav('/admin')
        }
    })
    const [sidevisible, hideside] = useState(true)

    const changevisibility = () => {
        hideside(!sidevisible)
    }
    return (
        <>
            <div style={{ height: "100vh", backgroundColor: "rgb(243, 243, 243)" }}>
                <Container fluid>
                    <Row>
                        <DeliverySidebar sidevisible={sidevisible} />
                        <Col lg={sidevisible ? 9 : 12}>
                            <Row style={{ backgroundColor: "white", height: "90px" }}>
                                <MainNavbar changevisibility={changevisibility} sidevisible={sidevisible} />
                            </Row>
                            <OrderAreaDel />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default OrderHomeDel