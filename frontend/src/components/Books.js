import React from 'react'
import data from '../data'

const Books = () => {
  return (
    <div>
        <h1 className='text-center my-5'>My Favourite Books`</h1>
        <div className="books d-flex">
        {
            data.books.map(book=>(
                <div className='book' key={book.slug}>
                <br />
                    <img src={book.image} alt={book.slug} />

                    <br />
                    <br />

                    <h5>{book.name}</h5>
                    <h6>{book.rating}</h6>
                    <h6>${book.price}</h6>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default Books