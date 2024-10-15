import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



const Intro = () => {
    const uid=sessionStorage.getItem('uid')
    const nav=useNavigate()
    const getstarted=()=>{
        if(uid){
            nav('/recipes')
        }
        else{
            nav('/login')
        }
        
    }
    return (
        <>
            <Col lg={5} style={{ paddingLeft: "130px" }} className='mt-5'>
                <div className='edu-au-vic-wa-nt-hand-intro intro-head'>Tasty & Affordable </div>
                <div className='edu-au-vic-wa-nt-hand-intro intro-head d-flex'><div className='me-2 jail-food'>Jail Food</div><div className='pt-2'>in Your Area</div></div>
                <p className='jail-food-para'>Delicious, nutritious meals delivered right to your facility—on time, every time.
                    Fueling inmates with flavor and care, one meal at a time.</p>
                <button className='intro-btn' onClick={getstarted}>Get Started</button>
            </Col>
            <Col lg={5} className='img-side'>
                <div>
                    <img src="../inmatelocal.png" width="680px"></img>
                </div>
            </Col>
        </>
    )
}

export default Intro