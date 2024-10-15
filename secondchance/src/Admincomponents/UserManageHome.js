import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './Sidebar'
import UserManageArea from './UserManageArea'
import { useState,useEffect } from 'react'
import MainNavbar from './MainNavbar'
import { useNavigate } from 'react-router-dom'

const UserManageHome = () => {
    const nav=useNavigate()
    const [sidevisible, hideside] = useState(true)

    useEffect(()=>{
        if(sessionStorage.getItem('aid')==''){
            nav('/admin')
        }
    })

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
                            <UserManageArea />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default UserManageHome