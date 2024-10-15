import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './MainNav';
import Intro from './Intro';
import Trend from './Trend';
import TopCollecions from './TopCollecions';
import FooterAll from './FooterAll';


const UserHome = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <MainNav />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Intro />
        </Row>
      </Container>
      <Container fluid className='carousel-container'>
        <Row style={{ backgroundColor: "rgb(247, 245, 243)",borderRadius:"12px" }} className='ms-5 me-5'>
          <Row className='mt-5'>
            <Col lg={6}>
              <h1 className='edu-au-vic-wa-nt-hand-intro' style={{ fontSize: "40px", marginTop: "50px", marginLeft: "50px" }}>Trending recipes</h1>
            </Col>
          </Row>
          <Row className='mt-5'>
            <Trend />
          </Row>
        </Row>
      </Container>
      <Container fluid>
        <Row className='mt-5'>
          <center>
            <Col lg={6}>
              <h1 className='edu-au-vic-wa-nt-hand-intro'>Top Collections</h1>
            </Col>
          </center>
        </Row>
        <Row className='justify-content-center'>
          <TopCollecions />
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

export default UserHome