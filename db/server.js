import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

//! Create a link to the monogodb database using mongoose
    
const uri =  process.env.MONGO_URI || "mongodb+srv://imokha01:born2begreat@cluster0.xjs0gqw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const connectDB = async () => {
  try { 
    const conn = await mongoose.connect(uri)
      console.log(`MongoDB connected to ${conn.connection.host}`.rainbow.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
    process.exit();
  }
}; 

export default connectDB;