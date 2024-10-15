import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import MarketingManageArea from './MarketingManageArea'
import { useState,useEffect } from 'react'
import MainNavbar from './MainNavbar'
import { useNavigate } from 'react-router-dom'


const MarketingManageHome = () => {
    const nav=useNavigate()


    useEffect(()=>{
        if(sessionStorage.getItem('aid')==''){
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
                        <Sidebar sidevisible={sidevisible}/>
                        <Col lg={sidevisible ? 9 : 12}>
                            <Row style={{ backgroundColor: "white", height: "90px" }}>
                                <MainNavbar changevisibility={changevisibility} sidevisible={sidevisible} />
                            </Row>
                            <MarketingManageArea />
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default MarketingManageHome