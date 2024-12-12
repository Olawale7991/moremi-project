import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongoDB.js'
import studentRouter from './routes/studentRoutes.js'
import partnerRouter from './routes/partnerRoutes.js'



dotenv.config()
connectDB()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5000

// Importing Routes
app.use('/api/students', studentRouter)
app.use('/api/partners', partnerRouter)

app.get('/', (req, res)=> {
    res.send('API WORKING')
})

app.listen(PORT, ()=> {
    console.log(`App is running at ${PORT}`);
    
})