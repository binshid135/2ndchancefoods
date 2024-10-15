import React from 'react'
import { Col } from 'react-bootstrap'

const FooterAll = () => {
    return (
        <>
            <Col lg={6} className='mt-5'>
                <h2 className='brnd pt-2 lobster-regular'><img src="../logofooter.png" style={{ borderRadius: "50px" }} width="65px" height="65px"></img>2ndChanceFoods.</h2>
                <div className='ps-5 ms-4 jail-address'>H66C+92G, Thrissur - Shoranur Road, Viyyur,<br></br> Thrissur, Kerala 680010</div>
            </Col>
            <Col lg={3} className='jail-address mt-5'>
            <h2>Quik Links</h2>
            <div className='mt-1'>Terms & Conditions</div>
            <div className='mt-1'>Privacy Policy</div>
            <div className='mt-1'>Affiliates</div>
            <div className='mt-1'>Return Policy</div>
            </Col>
            <Col lg={3} className='jail-address mt-5'>
            <h2>Resources</h2>
            <div className='mt-1'>Careers</div>
            <div className='mt-1'>Press</div>
            <div className='mt-1'>Contact Us</div>
            </Col>
        </>
    )
}

export default FooterAll