import mongoose from "mongoose";


export const connectToDatabase = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (mongoUri) {
            await mongoose.connect(mongoUri);
            console.log('Connected to MongoDB');
        } else {
            throw new Error('MongoDB URI is not set');
        }
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

