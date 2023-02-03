import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

const HomeScreen = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/books')
            setBooks(result.data) // this data is coming from ajax req
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1 className='text-center my-4'>Featured Books</h1>
            <div className="books d-flex">
                {
                    books.map(book => (
                        <div className='book' key={book.slug}>
                            <br />
                            <Link to={`/book/${book.slug}`} className='text-decoration-none'>
                                <img src={book.image} alt={book.slug} />
                            </Link>
                            <div className="book-info my-3">
                                <Link to={`/book/${book.slug}`}>
                                    <h5>{book.name}</h5>
                                </Link>
                                <h6>{book.rating}</h6>
                                <h6>${book.price}</h6>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeScreen