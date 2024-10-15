import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import axios from 'axios'
import Sidebar from './Sidebar'
import MainNavbar from './MainNavbar'
import { useNavigate } from 'react-router-dom'

const ViewStaffs = () => {
    const nav = useNavigate()
    useEffect(() => {
        if (sessionStorage.getItem('aid') == '') {
            nav('/admin')
        }
    })
    const [sidevisible, hideside] = useState(true)

    const changevisibility = () => {
        hideside(!sidevisible)
    }

    const [stores, stres] = useState([])
    const [dels, delres] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/getstore`).then(response => {
            console.log(response.data.data);
            stres(response.data.data)
        })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8080/admin/getdel`).then(response => {
            console.log(response.data.data);
            delres(response.data.data)

        })
    }, [])

    const remove = async (id) => {
        const response = await axios.post(`http://localhost:8080/admin/removestore/`, { id })
        console.log(response.data.data);
        stres(stores.filter(item => item._id !== id))
    }


    const remove2 = async (id) => {
        const response = await axios.post(`http://localhost:8080/admin/removedel/`, { id })
        console.log(response.data.data);
        delres(dels.filter(item => item._id !== id))
    }
    return (
        <>
            <div style={{ height: "100vh", backgroundColor: "rgb(243, 243, 243)" }}>
                <Container fluid>
                    <Row>
                        <Sidebar sidevisible={sidevisible} />
                        <Col lg={sidevisible ? 9 : 12}>
                            <Row style={{ backgroundColor: "white", height: "90px" }}>
                                <MainNavbar changevisibility={changevisibility} sidevisible={sidevisible} />
                            </Row>
                            <Row style={{ backgroundColor: "rgb(243, 243, 243)" }} className='mt-4'>
                                <Col lg={12}>
                                    <center><h1 className='prod-manage-head'>Staff Management</h1></center>
                                </Col>
                            </Row>
                            <Row className='justify-content-center mt-4 '>
                                <Col lg={5} className='table-row pt-5 ps-5 pb-5 pe-5 mb-5'>
                                    <u><h5 className='mt-3 mb-4'>Store Admins</h5></u>
                                    <Table responsive className='user-view-table'>
                                        <thead>
                                            <tr>
                                                {/* <th>User #</th> */}
                                                {/* <th>Email</th> */}
                                                <th>Username</th>
                                                <th>Mobile</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stores.map((i, index) => (
                                                <tr key={i.id} >
                                                    {/* <td>{index + 1}</td> */}
                                                    {/* <td>{i.mail}</td> */}
                                                    <td>{i.username}</td>
                                                    <td>{i.mobile}</td>
                                                    <td><button className='remove-btn ps-3 pe-3' onClick={() => remove(i._id)}>Remove</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col lg={5} className='table-row pt-5 ps-5 pb-5 pe-5 mb-5'>
                                    <u><h5 className='mt-3 mb-4'>Delivery Staffs</h5></u>
                                    <Table responsive className='user-view-table'>
                                        <thead>
                                            <tr>
                                                {/* <th>User #</th>
                                                <th>Email</th> */}
                                                <th>Username</th>
                                                <th>Mobile</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dels.map((i, index) => (
                                                <tr key={i.id} >
                                                    {/* <td>{index + 1}</td>
                                                    <td>{i.mail}</td> */}
                                                    <td>{i.username}</td>
                                                    <td>{i.mobile}</td>
                                                    <td><button className='remove-btn ps-3 pe-3' onClick={() => remove2(i._id)}>Remove</button></td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ViewStaffs