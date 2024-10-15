import React from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'


const AddCartModal = ({show,closepro,img,specpro,addcart,addqt,subqt,qtres,qty}) => {
    return (
        <>
            <Modal size="lg" show={show} onHide={closepro} className='mt-5'>
                <Container fluid>
                    <Row className='mt-4 mb-4'>
                        <Col lg={6}>
                            <img src={`${img}${specpro.image}`} height="350px" width="350px"></img>
                        </Col>
                        <Col lg={6} className='mt-1'>
                            <h4>{specpro.name}</h4>
                            <div className='modal-price mt-1'>₹ {specpro.price}.00</div>
                            <p className='mt-3'>{specpro.description}</p>
                            <div className='d-flex mt-4'>
                                <button className='add-cart pb-2 pt-2' onClick={() => addcart(specpro._id)}>Add to Cart</button>
                                <div className='qt-box ms-3 d-flex'>
                                    <div className='plus ms-5 pt-1' onClick={addqt}>+</div>
                                    <form>
                                        <input type="number" value={qty} required className='ms-3 pt-2' min='1' style={{ border: "none", background: "none", width: "50px" }} onChange={(e) => qtres(e.target.value)}></input>
                                    </form>
                                    <div className='minus' onClick={subqt}>-</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal>
        </>
    )
}

export default AddCartModal