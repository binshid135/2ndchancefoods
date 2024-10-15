import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MainNav from './MainNav'
import Foods from './Foods'
import FooterAll from './FooterAll'

const Recipes = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <MainNav />
                </Row>
            </Container>
            <Container fluid >
                <Row style={{ backgroundColor: "rgb(247, 245, 243)" }} className='ms-5 me-5'>
                    <Row className='mt-3'>
                        <center>
                            <Col lg={6}>
                                <h1 className='edu-au-vic-wa-nt-hand-intro mt-5'>All Foods.</h1>
                            </Col>
                        </center>
                    </Row>
                    <Row className='justify-content-center'>
                        <Foods />
                    </Row>
                </Row>
            </Container>
            <Container fluid className='footer-container'>
                <Row>
                    <FooterAll />
                </Row>
            </Container>
        </>
    )
}

export default Recipes