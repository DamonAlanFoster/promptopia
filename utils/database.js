import mongoose from 'mongoose';

let isConnetcted = false; // track the connection

export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnetcted = true;
        console.log("MongoDB Connected");
        
        } catch (error) {
            console.log(error);
        }
}