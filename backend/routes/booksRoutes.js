import express from 'express'
import data from '../data.js'

const booksRoutes = express.Router()

// url - /api/books
booksRoutes.get('/', (req,res)=>{
    res.send(data.books)
})

export default booksRoutes