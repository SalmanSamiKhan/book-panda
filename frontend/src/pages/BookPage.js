import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Book from '../components/Book';

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
        const result = await axios.get(`/api/book/${slug}`)
        dispatch({ type: ACTIONS.SUCCESS, payload: result.data })
      } catch (err) {
        dispatch({ type: ACTIONS.FAIL, payload: err.message })
      }
    }
    fetchData()
  }, [slug])
  return (
    loading ? <div>Loading...</div>
      : error ? <div>{error.message}</div>
        :
       <div>
        <h1>{book.name}</h1>
       </div>
  )
}

export default BookPage