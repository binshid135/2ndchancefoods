import React from 'react'
import { Col, Row,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const DeliverySidebar = ({sidevisible}) => {
    const did=sessionStorage.getItem('did')
    return (
        <>
        <Col lg={sidevisible ? 3 : 0} className={sidevisible ? '' : 'd-none'}>
                <Nav defaultActiveKey="/home" className="flex-column sidebar-col" style={{ backgroundColor: "rgb(226, 55, 68)",position: "fixed" }}>
                    <Row className="side-row-head">
                        <Col lg={12} >
                            <div className='admin-name pt-4 ps-5 pb-4'>{did}</div>
                        </Col>
                        <Col lg={12}>
                            <div className='main-menu-text pt-4 ps-5'>Main Menu</div>
                            <hr style={{ color: "white" }}></hr>
                        </Col>
                    </Row>
                    {/* <div className='dropdown'><Nav.Link className='main-menu-items'><Link style={{ textDecoration: "none",color:"white"}}>Product Management</Link></Nav.Link>
                        <div class="dropdown-content mb-5">
                            <Link to='/admin-product-manage' style={{ textDecoration: "none" }}><a className='nav-items-links'>Add products</a></Link>
                            <Link to='/admin-products' style={{ textDecoration: "none" }}><a className='nav-items-links'>products</a></Link>
                        </div>
                    </div> */}
                    <Nav.Link className='main-menu-items'><Link to='/delivery-home'  style={{ textDecoration: "none",color:"white" }}>Orders</Link></Nav.Link>
                    <Nav.Link  className='main-menu-items' > <Link to='/confirmed' style={{ textDecoration: "none",color:"white" }}>Confirmed Orders</Link> </Nav.Link>
                    <Nav.Link  className='main-menu-items' > <Link to='/delivered' style={{ textDecoration: "none",color:"white" }}>Delivered Orders</Link></Nav.Link>
                    <Nav.Link  className='main-menu-items' ><Link to='/ontheway' style={{ textDecoration: "none",color:"white" }}>On it's Way</Link></Nav.Link>
                </Nav>
            </Col>










            {/* <Col lg={3} style={{ backgroundColor: "rgb(82, 113, 255)", height: "100vh" }}>
                <Row className="side-row-head">
                    <Col lg={12} >
                        <div className='admin-name pt-4 ps-5 pb-4'>Delivery Staff Name</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <div className='main-menu-text pt-4 ps-5'>Main Menu</div>
                        <hr style={{ color: "white" }}></hr>
                    </Col>
                    <Row>
                        <ul className='ms-5 ps-5'>
                            <div className='dropdown'><Link to='/admin-product-manage'><li className='main-menu-items'>Inventory Management</li></Link>
                                <div class="dropdown-content mb-5" style={{ backgroundColor: "rgb(82, 113, 255)" }}>
                                    <Link to='/admin-product-manage' style={{ textDecoration: "none" }}><a className='nav-items-links'>Add products</a></Link>
                                    <Link to='/admin-products' style={{ textDecoration: "none" }}><a className='nav-items-links'>products</a></Link>
                                </div>
                            </div>
                            <Link to='/admin-user-manage'><li className='main-menu-items'>User Management</li></Link>
                            <Link to='/sales-analysis'><li className='main-menu-items'>Sales</li></Link>
                            <Link to='/marketing-manage'><li className='main-menu-items'>Orders</li></Link>
                            <Link to='/revenue-tracking'><li className='main-menu-items'>Payments</li></Link>
                        </ul>
                    </Row>
                </Row>
            </Col> */}
        </>
    )
}

export default DeliverySidebar