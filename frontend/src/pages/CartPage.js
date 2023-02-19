import React, { useContext, useState } from 'react'
import { Alert, Button, Card, Col, ListGroup, ListGroupItem, Row, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Store } from '../Store'
import {MdDelete} from 'react-icons/md'

const Cart = () => {
    const { state, dispatch: cartDispatch } = useContext(Store)
    const { cart } = state
    const { cartItems } = cart
    
    return (
        <div className='container my-5'>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <h1 className='text-center mb-5'>Shopping Cart</h1>
            <Row>
                <Col md={8} className='mb-5'>
                    {
                        cartItems.length === 0 ? (
                            <Alert variant='danger'> Cart is Empty &nbsp; <Link to="/">Go Shopping</Link> </Alert>
                        ) :
                            (
                                <ListGroup>
                                    {cart.cartItems.map((item) => (
                                        <ListGroupItem key={item._id} className=''>
                                            <Row className='align-items-center'>
                                                <Col md={2} className='mb-2'>
                                                    <img className='img-fluid rounded img-thumbnail'
                                                        src={item.image} alt={item.name}></img>

                                                </Col>
                                                <Col className='mb-2 me-2' md={3}><Link to={`/book/${item.slug}`}>{item.name}</Link></Col>
                                                <Col className='mb-2 me-4' md={2}>
                                                    {/* <div className="col-md-4"> */}
                                                    <Col>
                                                        <Form.Select className='form form-select-sm cart-select'
                                                            // value={quant} onChange={(e) => setQuant(e.target.value)}
                                                        >
                                                            {
                                                                [...Array(item.stock).keys()].map(x => (
                                                                    <option value={x + 1}>{x + 1}</option>
                                                                )
                                                                )
                                                            }
                                                        </Form.Select>
                                                    </Col>
                                                    {/* </div> */}

                                                </Col>
                                                <Col className='mb-2' md={2}> <strong> ${item.price} </strong></Col>
                                                <Col className='mb-2' md={2}><MdDelete size='1.7em'/></Col>
                                            </Row>
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            )
                    }
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item className='my-3 text-center'>
                                    <Row className='mb-3'>
                                        <h4>Subtotal (x items) : $ price</h4>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-grid">
                                        <Button variant='primary'>Proceed to Checkout</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Cart