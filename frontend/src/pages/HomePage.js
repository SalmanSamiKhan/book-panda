import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap';
import Book from '../components/Book';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


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
            return { ...state, books: action.payload, loading: false }
        case ACTIONS.FAIL:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}

const HomeScreen = () => {
    const [{ loading, error, books }, dispatch] = useReducer(reducer, {
        books: [],
        loading: true,
        error: ''
    })
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: ACTIONS.REQUEST })
            try {
                const result = await axios.get('/api/books')
                dispatch({ type: ACTIONS.SUCCESS, payload: result.data })
            } catch (err) {
                dispatch({ type: ACTIONS.FAIL, payload: err.message })
            }
        }
        fetchData()
    }, [])
    
    return (
        <div className="books">
        <Helmet>
            <title>Bookmania</title>
        </Helmet>
            <h1 className='text-center'>Featured Books</h1>
            {
                loading ? (<LoadingBox/>) 
                : error ? <MessageBox variant={'danger'} msg='Books Not Found!' error={error}/>
                :
                    <Row>
                        {books.map(book => (
                            <Col key={book.slug} sm={6} md={4} lg={3} className='mb-3'>
                                <Book book={book} />
                            </Col>
                        ))}</Row>
            }
        </div>
    )
}

export default HomeScreen