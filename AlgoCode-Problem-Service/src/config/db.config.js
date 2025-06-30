import mongoose from "mongoose";
import { MONGODB_URL } from "./server.config.js";

async function connectToDB(){
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.log("unable to connect to db");
    }
}

export default connectToDB;