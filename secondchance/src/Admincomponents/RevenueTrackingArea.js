import React from 'react'
import { Container, Row, Col,Card,Table } from 'react-bootstrap'
import MainNavbar from './MainNavbar'
import { useState,useEffect } from 'react'
import axios from 'axios'

const RevenueTrackingArea = () => {
  const [totalrevenue,totres]=useState()
  const [items,itemres]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/admin/totalrevenue').then(response=>{
      totres(response.data.totalrevenue)
      itemres(response.data.data)
    })
  })
  return (
    <>

      <Row style={{ backgroundColor: "rgb(243, 243, 243)" }} className='mt-4'>
        <Col lg={12}>
          <center><h1 className='prod-manage-head'>Revenue Tracking</h1></center>
        </Col>
        <Row>
          <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
            <Card.Body>
              <div className='tot-orders'>Total Revenue</div>
              <div className='tot-order-amount mt-2'>₹{totalrevenue}</div>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col lg={10} className='per-item-col mt-5 ms-5 mb-5'>
            <h5 className='mt-3 mb-4'>Total revenue per item</h5>
            <Table>
              <thead>
                <tr>
                  <th className='tab-head'>Product Name</th>
                  <th className='tab-head'>Revenue generated</th>
                </tr>
              </thead>
              <tbody>
                {items.map((i) => (
                  <tr>
                    <td>{i.product}</td>
                    <td>₹{i.amounts}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Row>

    </>
  )
}

export default RevenueTrackingArea