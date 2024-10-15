import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StoreSidebar from './StoreSidebar'
import InventoryArea from './InventoryArea'
import MainNavbar from '../Admincomponents/MainNavbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const InventoryHome = () => {
    const nav=useNavigate()
    useEffect(()=>{
        if(sessionStorage.getItem('said')==""){
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
                        <StoreSidebar sidevisible={sidevisible}/>
                        <Col lg={sidevisible ? 9 : 12}>
                            <Row style={{ backgroundColor: "white", height: "90px" }}>
                                <MainNavbar changevisibility={changevisibility} sidevisible={sidevisible}/>
                            </Row>
                            <InventoryArea />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default InventoryHome