import React from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import './register.css'
import { useState } from 'react'
import SignUp from './SignUp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const nav = useNavigate()
    const [mail, mailres] = useState("")
    const [pass, pres] = useState("")

    const sub = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://localhost:8080/user/login', { mail, pass })
        console.log(response.data.data);
        if (response.data.data == "ok") {
            sessionStorage.setItem('uid', response.data.uid)
            nav('/')
        }
        else {
            alert("wrong username or password")
        }
    }

    const gotosign = () => {
        nav('/signup')
    }
    return (
        <>
            <Modal show className='mt-5'>
        <Container fluid>
            <Row className='justify-content-center mt-3'>
                <Col lg={4}>
                    <h3>Login Now</h3>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg={7} className='ps-4'>
                    Introduce your information to us
                </Col>
            </Row>
            <Row className='justify-content-center mt-4'>
                <Col lg={9}>
                <form onSubmit={sub}>
                    <input type='email' placeholder='enter email id' className='input-areas pt-1 pb-1' onChange={(e)=>mailres(e.target.value)}></input><br></br>
                    <input type='password' placeholder='enter your password' className='mt-2 input-areas pt-1 pb-1' onChange={(e)=>pres(e.target.value)}></input><br></br>
                    <center>
                        <button type='submit' className='mt-4 lg-btn pt-1 pb-1 mb-2'>Continue</button>
                        <div className='mb-5' style={{cursor:"pointer"}}>Don't Have an account? <u style={{color:"rgb(249, 68, 23)"}} onClick={gotosign} >Register Now</u></div>
                    </center>
                </form>
                </Col>
            </Row>
        </Container>
      </Modal>      


            {/* <Modal show>
                <Row className='justify-content-center mt-4'>
                    <Col lg={9}>
                        <form onSubmit={sub}>
                            <input type='email' placeholder='enter email id' className='input-areas pt-1 pb-1' onChange={(e) => mailres(e.target.value)}></input><br></br>
                            <input type='password' placeholder='enter your password' className='mt-2 input-areas pt-1 pb-1' onChange={(e) => pres(e.target.value)}></input><br></br>
                            <center>
                                <button type='submit' className='mt-4 lg-btn pt-1 pb-1 mb-2'>Continue</button>
                                <div className='mb-5' style={{ cursor: "pointer" }}>Don't Have an account? <u style={{ color: "rgb(249, 68, 23)" }} onClick={gotosign} >Register Now</u></div>
                            </center>
                        </form>
                    </Col>
                </Row>
            </Modal> */}
        </>
    )
}

export default Login