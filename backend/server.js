import express from 'express'
import data from './data.js'

const app = express()

app.get('/api/books', (req,res)=>{
    res.send(data.books)
})

app.get('/api/book/slug/:slug', (req,res)=>{
    const book = data.books.find(x=>x.slug===req.params.slug)
    if(book){
        res.send(book)
    }else{
        res.status(404).send({message:'Book not found'})
    }
})

app.get('/api/book/id/:id', (req,res)=>{
    const book = data.books.find(x=>x._id===req.params.id)
    if(book){
        res.send(book)
    }else{
        res.status(404).send({message:'Book not found'})
    }
})

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req,res)=>{
    console.log(`server runnign at http://localhost:${localPort}`)
})