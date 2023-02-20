import React, { useContext } from 'react'
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import MessageBox from '../components/MessageBox'
import { Store } from '../Store'

const Cart = () => {
    const {state, dispatch:cartDispatch} = useContext(Store)
    const {cart} = state
    const {cartitems} = cart
    return (
        <div className='container my-5'>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            <h1 className='text-center'>Shopping Cart</h1>
            <Row>
                <Col md={8}>
                    {
                        cartitems.length===0?(
                            <MessageBox variant={'danger'} msg={'Cart Is Empty.'}/>
                        ):
                        (
                            <ListGroup>
                                {cart.cartItems.map((item)=>(
                                    <ListGroupItem key={item._id}>
                                        <Row className='align-items-center'>
                                            <Col md={3}>image</Col>
                                            <Col md={3}>qty</Col>
                                            <Col md={3}>price</Col>
                                            <Col md={3}>delete</Col>
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
                                <ListGroup.Item>
                                    <Row>
                                        Subtotal (x items) : $ price
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