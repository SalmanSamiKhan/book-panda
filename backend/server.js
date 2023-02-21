import express from 'express'
import data from './data.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import booksRoutes from './routes/booksRoutes.js'
import bookRoutes from './routes/bookRoutes.js'

dotenv.config()
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('connected to db')
}).catch(err=>{
    console.log(err.message)
})

const app = express()

app.use('/api/books', booksRoutes)
app.use('/api/book', bookRoutes)

const localPort = process.env.PORT || 5000
app.listen(localPort, async (req,res)=>{
    console.log(`server runnign at http://localhost:${localPort}`)
})