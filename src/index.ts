import express, { Request, Response } from 'express'
import cookieParser from 'cookie-parser';
import path from 'path'
import cors from "cors"
import profileRoute from './routes/profile.route'
import authRoute from './routes/auth.route'
import dotenv from 'dotenv'
import { dbConnect } from './config/db.connect';
dotenv.config()

const app=express()
// dotenv.config({ path: path.resolve(__dirname, '../.env') });

// console.log('DEBUG MONGO_URL:', process.env.MONGO_URL); // ✅ Must print the URL

dbConnect()


app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use('/api',profileRoute)
app.use('/api/auth',authRoute)

const PORT = process.env.PORT || 3002
console.log(PORT);



// app.get('/',(req:Request,res:Response)=>{
//     res.send('Zecser first project')
// })
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})