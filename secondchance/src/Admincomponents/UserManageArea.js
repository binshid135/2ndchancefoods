import React from 'react'
import { Col, Row, Table } from 'react-bootstrap'
import MainNavbar from './MainNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

const UserManageArea = () => {
    const [users, userfunc] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/admin/getuser`).then(response => {
            console.log(response.data.data);
            userfunc(response.data.data)
        })
    }, [])

    const index = 1

    const remove = async (id) => {
        const response = await axios.post(`http://localhost:8080/admin/removeuser/`, { id })
        console.log(response.data.data);
        userfunc(users.filter(item => item._id !== id))
    }
    return (
        <>
            
                <Row style={{ backgroundColor: "rgb(243, 243, 243)" }} className='mt-4'>
                    <Col lg={12}>
                        <center><h1 className='prod-manage-head'>User Management</h1></center>
                    </Col>
                    <Row className='justify-content-center mt-4 '>
                        <Col lg={10} className='table-row pt-5 ps-5 pb-5 pe-5 mb-5'>
                            <Table responsive className='user-view-table'>
                                <thead>
                                    <tr>
                                        <th>User #</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((i, index) => (
                                        <tr key={i.id} >
                                            <td>{index + 1}</td>
                                            <td>{i.mail}</td>
                                            <td>{i.username}</td>
                                            <td>{i.mobile}</td>
                                            <td><button className='remove-btn ps-3 pe-3' onClick={() => remove(i._id)}>Remove</button></td>
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

export default UserManageArea