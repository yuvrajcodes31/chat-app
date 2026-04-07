import mongoose from "mongoose";
import dns from "dns"
// Function to connect to the mongodb database

export const connectDB = async () => {
    try {
        dns.setServers(["1.1.1.1", "8.8.8.8"]);
        mongoose.connection.on('connected', () => console.log('Database connected'))
        await mongoose.connect(`${process.env.MONGODB_URI}/chatapp`)
    } catch (error) {
        console.log(error)
    }
}