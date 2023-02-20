import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Badge, Button, Card, Col, ListGroup, Row, Form } from 'react-bootstrap';
import Rating from '../components/Rating';
import { Helmet } from 'react-helmet-async';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { Store } from '../Store';



const ACTIONS = {
  REQUEST: 'FETCH_REQUEST',
  SUCCESS: 'FETCH SUCCESS',
  FAIL: 'FETCH_FAIL'
}


const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { ...state, book: action.payload, loading: false }
    case ACTIONS.FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const BookPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [{ loading, error, book }, dispatch] = useReducer(reducer, {
    book: [],
    loading: true,
    error: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: ACTIONS.REQUEST })
      try {
        const result = await axios.get(`/api/book/slug/${slug}`)
        dispatch({ type: ACTIONS.SUCCESS, payload: result.data })
      } catch (err) {
        dispatch({ type: ACTIONS.FAIL, payload: err.message })
      }
    }
    fetchData() 
  }, [slug])

  // Handle Cart Add Item

  const [quant,setQuant] = useState(1)

  const { state, dispatch: cartDispatch } = useContext(Store)
  const { cart } = state
  const addToCart = async () => {
    const existItem = cart.cartItems.find(x => x._id === book._id)
    const qty = existItem ? existItem.qty + parseInt(quant) : parseInt(quant)
    console.log(existItem)

    const {data} = await axios.get(`/api/book/id/${book._id}`)
    if(data.stock<qty){
      toast.error('Sorry! You have reached maximum limit for this product.')
      return;
    }
    cartDispatch({
      type: 'CART_ADD_ITEM', payload: { ...book, qty },
    });
    toast.success('Product added to cart!')
    navigate('/cart')
  };

  return (
    loading ? <LoadingBox />
      : error ? <MessageBox variant={'danger'} msg='Book Not Found!' error={error} />
        :
        <div>
          <Helmet>
            <title>{book.name}</title>
          </Helmet>
          <Row >
            <Col md={6} className='mb-5' >
              <img className='img-fluid' src={book.image} alt={book.name} />
            </Col>
            <Col md={3} className='mb-5' >
              <ListGroup>
                <ListGroup.Item>
                  <h4> {book.name} </h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5> {book.author} </h5>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating rating={book.rating} />
                </ListGroup.Item>
                <ListGroup.Item>
                  Price : $ {book.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description:
                  <p> {book.desc} </p>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body>
                  <ListGroup variant='flush'>
                    <ListGroup.Item className='mb-3'>
                      <Row>
                        <Col>Price </Col>
                        <Col>${book.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='mb-3'>
                      <Row>
                        <Col>Status</Col>
                        <Col>
                          {
                            book.stock > 0
                              ? (<Badge bg='success'>Available</Badge>)
                              : (<Badge bg='danger'>Unavailable</Badge>)
                          }
                        </Col>
                      </Row>
                    </ListGroup.Item>

                    <ListGroup.Item className='mb-3'> 
                      <Row>
                        <Col className='mb-2'>Qty </Col>
                        {book.stock>0
                        ?(
                        <Col className=''>
                          <select
                            onChange={(e)=>setQuant(e.target.value)} value={quant}
                          >
                          {
                            [...Array(book.stock).keys()].map(x=>(
                              <option value={x+1}>{x+1}</option>
                            )
                            )
                          }
                          </select>
                        </Col>)
                        :( <Col> <h6 style={{color:'red'}}>U/A</h6> </Col>  )
                        }
                      </Row>
                    </ListGroup.Item>

                    {book.stock > 0 ? (
                      <ListGroup.Item className='text-center'>
                        {/* <div className="d-grid"> */}
                          <Button variant='primary' onClick={addToCart}>Add to Cart</Button>
                        {/* </div> */}
                      </ListGroup.Item>
                    )
                    :
                    <ListGroup.Item className='text-center'>
                        {/* <div className="d-grid"> */}
                          <Button variant='danger' disabled={book.stock === 0} onClick={addToCart}>Unavailable</Button>
                        {/* </div> */}
                      </ListGroup.Item>
                    }
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
  )
}

export default BookPage