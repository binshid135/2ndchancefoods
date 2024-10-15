import React from 'react'
import { Col, Row, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StoreSidebar = ({sidevisible}) => {
    const said=sessionStorage.getItem('said')
    return (
        <>

            <Col lg={sidevisible ? 3 : 0} className={sidevisible ? '' : 'd-none'}>
                <Nav defaultActiveKey="/home" className="flex-column sidebar-col" style={{ backgroundColor: "rgb(21, 115, 71)", position: "fixed" }}>
                    <Row className="side-row-head">
                        <Col lg={12} >
                            <div className='admin-name pt-4 ps-5 pb-4'>{said}</div>
                        </Col>
                        <Col lg={12}>
                            <div className='main-menu-text pt-4 ps-5'>Main Menu</div>
                            <hr style={{ color: "white" }}></hr>
                        </Col>
                    </Row>
                    <Nav.Link className='main-menu-items'><Link to='/store-admin-home' style={{ textDecoration: "none", color: "white" }}>Inventory Management</Link></Nav.Link>
                    {/* <Nav.Link  className='main-menu-items' > <Link to='/store-sales' style={{ textDecoration: "none",color:"white" }}>Sales</Link> </Nav.Link> */}
                    <Nav.Link className='main-menu-items' > <Link to='/store-orders' style={{ textDecoration: "none", color: "white" }}>Orders</Link></Nav.Link>
                    <Nav.Link className='main-menu-items' ><Link to='/store-payments' style={{ textDecoration: "none", color: "white" }}>Payments</Link></Nav.Link>
                </Nav>
            </Col>









        </>
    )
}

export default StoreSidebar