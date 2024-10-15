import React, { useState } from 'react'
import { Nav, Navbar, Container, Modal, Button,Dropdown } from 'react-bootstrap'
import './home.css'
import { Link } from 'react-router-dom'
import Login from '../registercomponents/Login'
import SignUp from '../registercomponents/SignUp'
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { BsBoxSeamFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { RiLogoutBoxFill } from "react-icons/ri";


const MainNav = () => {
    const nav=useNavigate()
    const uid = sessionStorage.getItem('uid')


    const logout=()=>{
        nav('/')
        sessionStorage.setItem('uid','')
        window.location.reload()
    }
    const login=()=>{
        nav('/login')
    }
    const signup=()=>{
        nav('/signup')
    }
    const gohome=()=>{
        nav('/')
    }
    

    return (
        <>
            <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "white" }}>
                <Container fluid>
                    <Navbar.Brand className='pt-3' onClick={gohome} style={{cursor:"pointer"}}><h2 className='brnd pt-2 lobster-regular'><img src="../logo.png" className='pb-2 me-2' style={{ borderRadius: "50px" }} width="60px" height="65px"></img>2ndChanceFoods</h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className='pe-5'>
                            <Nav.Link ><Link to="/Recipes" className='nav-items'>Recipes</Link></Nav.Link>
                            <Nav.Link><Link to="/Breakfast" className='nav-items'>Breakfast</Link></Nav.Link>
                            <Nav.Link><Link to="/Lunch" className='nav-items'>Lunch</Link></Nav.Link>
                            <Nav.Link><Link to="/Dinner" className='nav-items'>Dinner</Link></Nav.Link>
                            {uid ? <Link to='/cart'><FaShoppingCart className='mt-1 ms-4 cart-logo'  /></Link>
                            : <button className='ms-3 btn-up btn' onClick={signup}>sign up</button>}
                            
                            {uid ?
                                <Dropdown>
                                    <Dropdown.Toggle style={{background:"none",border:"none"}} id="dropdown-basic">
                                        <MdAccountCircle className='ms-3' style={{ fontSize: "35px", color: "rgb(249, 87, 39)" ,marginTop:"-5px"}} />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>nav('/myorders')}><BsBoxSeamFill className='me-2' style={{fontSize:"20px"}}/>My orders</Dropdown.Item>
                                        {/* <Dropdown.Item ><ImProfile className='me-2' style={{fontSize:"20px"}}/>My profile</Dropdown.Item> */}
                                        <Dropdown.Item onClick={logout}> <RiLogoutBoxFill className='me-2' style={{fontSize:"20px"}}/> Log Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                : <button className='ms-3 ps-3 pe-3 pb-1 btn-in' onClick={login}>sign in</button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNav