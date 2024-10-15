import React from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const TopCollecions = () => {
    const nav=useNavigate()
    return (
        <>
            <Col lg={4} md={7} sm={8} xs={8} className='mt-4'>
                <Card style={{ width: '18rem' }} className='top-coll-card'>
                    <Card.Img variant="top" className='top-coll-img' src="./breakfast.jpg" width="120px" height='220px' />
                    <Card.Body className='mt-3'>
                        <button className='top-coll-btn ms-3' onClick={()=>nav('/breakfast')}>Explore</button>
                        <Card.Title className='mt-3 ms-3'>Breakfast</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={4} md={7} sm={8} xs={8} className='mt-4'>
                <Card style={{ width: '18rem' }} className='top-coll-card'>
                    <Card.Img variant="top" className='top-coll-img' src="./lunch.jpg" width="120px" height='220px' />
                    <Card.Body className='mt-3'>
                        <button className='top-coll-btn ms-3' onClick={()=>nav('/lunch')}>Explore</button>
                        <Card.Title className='mt-3 ms-3'>Lunch</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col lg={3}  md={7} sm={8} xs={8} className='mt-4'>
                <Card style={{ width: '18rem' }} className='top-coll-card'>
                    <Card.Img variant="top" className='top-coll-img' src="./dinner.jpg" width="120px" height='220px' />
                    <Card.Body className='mt-3'>
                        <button className='top-coll-btn ms-3' onClick={()=>nav('/dinner')}>Explore</button>
                        <Card.Title className='mt-3 ms-3'>Dinner</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default TopCollecions