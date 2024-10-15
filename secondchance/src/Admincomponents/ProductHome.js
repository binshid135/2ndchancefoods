import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import MainNavbar from './MainNavbar'
import ProductArea from './ProductArea'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductHome = () => {
    const nav=useNavigate()
    const [sidevisible,hideside]=useState(true)

    const changevisibility=()=>{
        hideside(!sidevisible)
    }

    useEffect(()=>{
        if(sessionStorage.getItem('aid')==''){
            nav('/admin')
        }
    })


    return (
        <>
            <div style={{ height: "100vh", backgroundColor: "rgb(243, 243, 243)" }}>
                <Container fluid>
                    <Row>
                        <Sidebar sidevisible={sidevisible} />
                        <Col lg={sidevisible ? 9 : 12}>
                            <Row style={{ backgroundColor: "white", height: "90px" }} className='main-navbar-row'>
                                <MainNavbar changevisibility={changevisibility} sidevisible={sidevisible} />
                            </Row>
                            <ProductArea sidevisible={sidevisible}/>
                        </Col>
                    </Row>
                </Container>

            </div>

        </>
    )
}

export default ProductHome