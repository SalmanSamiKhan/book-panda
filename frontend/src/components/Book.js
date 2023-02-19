import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

function Book(props) {
    const { book } = props
    return (
        <Card className='book'>
            <Card.Body className='p-1'>
            <Link to={`/book/${book.slug}`} className='text-decoration-none'>
                <img src={book.image} alt={book.slug} className='card-img mt-3' />
            </Link>
            </Card.Body>
            <Card.Body className="book-info">
                <Link to={`/book/${book.slug}`}>
                    <Card.Title>{book.name}</Card.Title>
                </Link>
                <Card.Text> <div className='rat'><Rating rating={book.rating} /> &nbsp; ({book.review}) </div></Card.Text>
                <Card.Text> <h5 >  $ {book.price}  </h5></Card.Text>
                {/* <Button onClick={addToCart}>Add to Cart</Button> */}
            </Card.Body>
        </Card>
    )
}

export default Book