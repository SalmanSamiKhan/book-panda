import React, { useContext } from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import MessageBox from '../components/MessageBox'
import { Store } from '../Store'

function OrderDetailsPage() {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  return (
    <div className="order-details my-3">
      <h2>Order Details</h2>
      <Row>
        <Col md={8}>
          <Row>
            <Card className='my-3'>
              <Card.Body>
                <Card.Title>Shipping</Card.Title>
                <Card.Text>
                  <strong>Name:</strong> {cart.shippingAddress.name}<br />
                  <strong>Address:</strong> {cart.shippingAddress.address},{' '}
                  {cart.shippingAddress.city}{' '}
                  {cart.shippingAddress.postal},{' '}
                  {cart.shippingAddress.country}{' '}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <MessageBox variant='danger' msg='Not Delivered' />
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>Payment</Card.Title>
                <Card.Text>
                  <strong>Method:</strong> {cart.paymentMethod}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <MessageBox variant='danger' msg='Not Paid' />
              </Card.Body>
            </Card>
            <Card className='my-3'>
              <Card.Body>
                <Card.Title>Items</Card.Title>
                <ListGroup className='my-3'>
                  {cart.cartItems.map((item) => (
                    <ListGroup.Item key={item._id} >
                      <Row className="align-items-center">
                        <Col md={6}>
                          <img src={item.image} alt={item.name} className="img-fluid rounded img-thumbnail" />{' '}
                          {/* <Link to={`/book/${item.slug}`}>{item.name}</Link> */}
                          {item.name}
                        </Col>
                        <Col md={3}>{item.qty}</Col>
                        <Col md={3}>{item.price}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
                {/* <Link to='/cart'> <FaEdit size='1.3em'/> </Link> */}
              </Card.Body>
            </Card>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='my-3 mx-3'>
            <Card.Body>
              <Card.Title>Order Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>${cart.itemsPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>${cart.shippingPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>${cart.taxPrice.toFixed(2)}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong> Order Total</strong>
                    </Col>
                    <Col>
                      <strong>${cart.totalPrice.toFixed(2)}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      // onClick={placeOrderHandler}
                      disabled={cart.cartItems.length === 0}
                    >
                      Place Order
                    </Button>
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

export default OrderDetailsPage