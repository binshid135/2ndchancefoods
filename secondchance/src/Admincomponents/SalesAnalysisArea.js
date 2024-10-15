import React, { useState } from 'react'
import { Col, Row, Card, Table } from 'react-bootstrap'
import MainNavbar from './MainNavbar'
import { useEffect } from 'react'
import axios from 'axios'

const SalesAnalysisArea = () => {
    const [totalorder, totres] = useState()
    const [items, itemres] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/getsales`).then(response => {
            console.log("sd" + response.data.data);
            totres(response.data.len)
            itemres(response.data.data)
            console.log(items);

        })
    }, [])
    return (
        <>

            <Row style={{ backgroundColor: "rgb(243, 243, 243)" }} className='mt-4'>
                <Col lg={12}>
                    <center><h1 className='prod-manage-head'>Sales Analysis</h1></center>
                </Col>
                <Row>
                    <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                        <Card.Body>
                            <div className='tot-orders'>Total Orders</div>
                            <div className='tot-order-amount ms-4 mt-2'>{totalorder}</div>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <Col lg={10} className='per-item-col mt-5 ms-5 mb-5'>
                        <h5 className='mt-3 mb-4'>Total Sales per item</h5>
                        <Table>
                            <thead>
                                <tr>
                                    {/* <th className='tab-head'>#</th> */}
                                    <th className='tab-head'>Product Name</th>
                                    <th className='tab-head'>Total Sales</th>
                                    {/* <th className='tab-head'>Username</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((i)=>(
                                <tr>
                                    <td>{i.product}</td>
                                    <td>{i.quantity}</td>
                                </tr>
                                ))}
                            </tbody>
                        </Table>

                    </Col>
                </Row>
            </Row>



            {/* Total Sales per item:<br></br>
                            {items.map((i) => (
                                <>
                                    {i.product} {i.quantity}<br></br>
                                </>
                            ))} */}

        </>
    )
}

export default SalesAnalysisArea