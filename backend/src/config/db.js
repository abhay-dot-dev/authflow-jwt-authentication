import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to DB...");
    } catch (error) {
        console.error("Database connection failed!", error);
        throw error;
    }
}