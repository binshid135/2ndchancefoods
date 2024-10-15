import React, { useState, useEffect } from 'react'
import { Col, Card, Button, Modal, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AddCartModal from './AddCartModal'

const Foods = () => {
  const nav = useNavigate()
  const [pro, prores] = useState([])

  

  useEffect(() => {
    axios.get(`http://localhost:8080/user/getproduct`).then(response => {
      console.log(response.data.data);
      prores(response.data.data)
    })

  }, [])
  const img = 'http://localhost:8080/'



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [specpro, specres] = useState([])
  const prospec = async (id) => {
    handleShow()
    axios.get(`http://localhost:8080/user/prospec/${id}`).then(response => {
      console.log(response.data.data);
      specres(response.data.data)

    })
  }
  const [qty, qtres] = useState(1)

  const addqt = () => {
    const newqt = qty + 1
    qtres(newqt)
  }
  const subqt = () => {
    if (qty > 1) {
      const newqt = qty - 1
      qtres(newqt)
    }
    else {
      alert("Quantity can't be 0")
    }
  }

  const closepro = () => {
    qtres(1)
    handleClose()
  }
  const uid = sessionStorage.getItem('uid')

  const addcart = async (id) => {
    if (qty == "" || qty<=0) {
      alert("enter a valid number")
    }
    else {
      if (uid) {
        const response = await axios.post('http://localhost:8080/user/addcart', { id, uid, qty })
        console.log(response.data.data);
        if (response.data.data == "no stock") {
          alert(" sorry item out of stock")
        }
        else if (response.data.data == "ok") {
          nav('/cart')
        }
      }
      else {
        alert("please login to add item to cart")
      }


    }

  }


  return (
    <>{pro.map((i) => (
      <Col lg={3} style={{ marginTop: "80px", marginBottom: "80px" }}>
        <Card style={{ width: '18rem' }} className='food-card'>
          <Card.Img variant="top" className='food-card-image' src={`${img}${i.image}`} height="230px" width="10px" />
          <Card.Body>
            <Card.Title className='text-center'>{i.name}</Card.Title>
            <hr></hr>
            <button className='top-coll-btn ms-3' onClick={() => prospec(i._id)}>Order</button>
            <div className='price-style text-end' style={{ marginTop: "-35px" }}>₹{i.price}</div>
          </Card.Body>
        </Card>
      </Col>
    ))}
      <AddCartModal show={show} closepro={closepro} img={img} specpro={specpro} addcart={addcart} addqt={addqt} qty={qty} qtres={qtres} subqt={subqt} />
    </>
  )
}

export default Foods