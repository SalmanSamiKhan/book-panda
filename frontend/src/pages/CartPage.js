import React, { useContext, useState } from 'react'
import { Alert, Button, Card, Col, ListGroup, ListGroupItem, Row, Form } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import { BsTrashFill } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-toastify'

const Cart = () => {
    const { state, dispatch: cartDispatch } = useContext(Store)
    const { cart } = state
    const { cartItems } = cart
    const navigate = useNavigate()
    // const [quant,setQuant] = useState(1)

    const addToCart = async (item, val) => {
        const qty = parseInt(val)
        const { data } = await axios.get(`/api/book/id/${item._id}`)
        if (data.stock < qty) {
            toast.error('Sorry! You have reached maximum limit for this product.')
            return;
        }
        cartDispatch({
            type: 'CART_ADD_ITEM', payload: { ...item, qty },
        });
        // toast.success('Product updated successfully!')
        // setQuant(qty)
    }

    const handleDelete = (item) => {
        cartDispatch({ type: 'CART_REMOVE_ITEM', payload: item })
        toast.success('Product removed from cart!')
    }

    const handleCheckout = () => {
        navigate('/login?redirect=/shipping') // if user is logged in navigate to shipping page
    }
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
                                                <Col className='mb-2' md={4}><Link to={`/book/${item.slug}`}>{item.name}</Link></Col>
                                                <Col className='mb-2' md={2}>
                                                    {/* <div className="col-md-4"> */}
                                                    <div>
                                                        {/* <Form.Select className='form form-select-sm cart-select' */}
                                                        <select
                                                            value={item.qty} onChange={(e) => addToCart(
                                                                item, e.target.value
                                                                // addToCart(item._id),
                                                                // Number(e.target.value)
                                                            )}
                                                        >

                                                            {
                                                                [...Array(item.stock).keys()].map(x => (
                                                                    <option value={x + 1}>{x + 1}</option>
                                                                )
                                                                )
                                                            }
                                                        </select>
                                                        {/* </Form.Select> */}
                                                    </div>
                                                    {/* </div> */}

                                                </Col>
                                                <Col className='mb-2' md={2}> <strong> ${item.price} </strong></Col>
                                                <Col className='mb-2' md={2}>
                                                    <button style={{ border: 'none', background: 'none' }} onClick={() => handleDelete(item)} >  <BsTrashFill className='trash' 
                                                     /> </button>
                                                </Col>
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
                                    <Col><h6>  Price ({cartItems.reduce((a, c) => a + c.qty, 0 )} items) </h6></Col>
                                    <Col> <h6> ${cartItems.reduce((a, c) => a+ c.price * c.qty, 0 ).toFixed(2)} </h6></Col>
                                        {/* <h5>Total ({cartItems.reduce((a, c) => a + c.qty, 0 )} items) : 
                                        ${cartItems.reduce((a, c) => a+ c.price * c.qty, 0 ).toFixed(2)}
                                        </h5> */}
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='my-3 text-center'>
                                    <Row className='mb-3'>
                                    <Col><h6>  Delivery Charges </h6></Col>
                                    <Col> <h6 style={{color:'green'}}> Free </h6></Col>
                                        {/* <h5>Total ({cartItems.reduce((a, c) => a + c.qty, 0 )} items) : 
                                        ${cartItems.reduce((a, c) => a+ c.price * c.qty, 0 ).toFixed(2)}
                                        </h5> */}
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='my-3 text-center'>
                                    <Row className='mb-3'>
                                    <Col><h5>  Total Amount </h5></Col>
                                    <Col> <h5> ${cartItems.reduce((a, c) => a+ c.price * c.qty, 0 ).toFixed(2)} </h5></Col>
                                        {/* <h5>Total ({cartItems.reduce((a, c) => a + c.qty, 0 )} items) : 
                                        ${cartItems.reduce((a, c) => a+ c.price * c.qty, 0 ).toFixed(2)}
                                        </h5> */}
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item className='text-center'>
                                    {/* <div className="d-grid"> */}
                                        <Button variant='primary' disabled={cartItems.length === 0} onClick={handleCheckout}>Proceed to Checkout</Button>
                                    {/* </div> */}
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