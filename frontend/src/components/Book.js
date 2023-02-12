import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Book(props) {
    const { book } = props
    return (
        <Card className='book'>
            <Link to={`/book/${book.slug}`} className='text-decoration-none'>
                <img src={book.image} alt={book.slug} className='card-img mt-3' />
            </Link>
            <Card.Body className="book-info">
                <Link to={`/book/${book.slug}`}>
                    <Card.Title>{book.name}</Card.Title>
                </Link>
                <Card.Text><Rating rating={book.rating}/></Card.Text>
                <Card.Text>${book.price}</Card.Text>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Book