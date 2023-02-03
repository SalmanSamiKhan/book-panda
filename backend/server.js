import express from 'express'
import data from './data.js'

const app = express()

app.get('/api/books', async (req,res)=>{
    res.send(data.books)
})

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req,res)=>{
    console.log(`server runnign at http://localhost:${localPort}`)
})