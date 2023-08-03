import mongoose from "mongoose";

async function dbConnect(): Promise<void>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/next_ecom")
    } catch (error){
        console.error("Error connecting to Database:", error)
    }
}

export default dbConnect;