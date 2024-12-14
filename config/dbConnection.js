import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbURI = process.env.DATABASE_URL;
const connectDB = async () => {
    try {
      await mongoose.connect(dbURI);
      console.log("MongoDB connected successfully!");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
      process.exit(1); // Exit the process if connection fails
    }
  };
  
  
  export default connectDB;
