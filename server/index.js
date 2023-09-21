import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoutes from './routes/users.js'
import productRoutes from './routes/products.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI
app.use(express.json())

app.use('/uploads', express.static('uploads'))

app.use('/auth', authRoutes)
app.use('/products', productRoutes)

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => { console.log(err) })



app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`)
})
