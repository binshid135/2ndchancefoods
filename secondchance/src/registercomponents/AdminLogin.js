import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const nav=useNavigate()
    const [uname,ures]=useState("")
    const [pass,pres]=useState("")

    const sub=async(e)=>{
        e.preventDefault()
        const response=await axios.post('http://localhost:8080/admin/adminlogin',{uname,pass})
        console.log(response.data.data);
        if(response.data.data == "store admin"){
            sessionStorage.setItem("said",response.data.aid)
            nav('/store-admin-home')
        }
        else if(response.data.data == "delivery staff"){
            sessionStorage.setItem("did",response.data.aid)
            nav('/delivery-home')
        }
        else if(response.data.data == "admin"){
            sessionStorage.setItem("aid",response.data.aid)
            nav('/admin-product-manage')
        }
        else{
            alert('wrong username or password')
        }  
    }




    return (
        <>
            <Container fluid>
                <Row>
                    <Col lg={5}>
                        <div className='ad-log-back'>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className='form-area'>
                            <h1 className='area-head'>Hello! Lets's get started</h1>
                            <p className='area-sub'>Enter Your Details below</p>
                            <form onSubmit={sub}>
                                <input type='text' className='admin-fields ps-3' placeholder='username' onChange={(e)=>ures(e.target.value)}></input><br></br>
                                <input type='password' className='admin-fields mt-2 ps-3' placeholder='password' onChange={(e)=>pres(e.target.value)}></input><br></br>
                                <button className='admin-sign-btn mt-4 pt-2 pb-2 ps-4 pe-4'>SIGN IN</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AdminLogin