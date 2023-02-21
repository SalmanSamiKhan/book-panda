import express from 'express'
import data from '../data.js'

const bookRoutes = express.Router()

bookRoutes.get('/slug/:slug', (req,res)=>{
    const book = data.books.find(x=>x.slug===req.params.slug)
    if(book){
        res.send(book)
    }else{
        res.status(404).send({message:'Book not found'})
    }
})

bookRoutes.get('/id/:id', (req,res)=>{
    const book = data.books.find(x=>x._id===req.params.id)
    if(book){
        res.send(book)
    }else{
        res.status(404).send({message:'Book not found'})
    }
})

export default bookRoutes