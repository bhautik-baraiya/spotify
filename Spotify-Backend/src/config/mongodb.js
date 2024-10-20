import mongoose from "mongoose";
import dotenv from 'dotenv';
// dotenv.config();
const connectDB = async () => {

    mongoose.connection.on('connected', () => {

        console.log("DB Connected");
    })

    await mongoose.connect('mongodb+srv://spotify:12345@cluster0.ixkva.mongodb.net/spotify');

    // console.log('mongodb+srv://spotify:12345@cluster0.ixkva.mongodb.net');
}

export default connectDB; 