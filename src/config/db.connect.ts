import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const dbConnect=async()=>{
    
    try {
        const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) {
      throw new Error("MONGO_URL not found in environment variables");
    }
        const connect=await mongoose.connect(mongoUrl);
        console.log(`data base connected on ${connect.connection.name}`)
    } catch (error) {
        console.log('database connection error',error)
        process.exit()
    }
}
