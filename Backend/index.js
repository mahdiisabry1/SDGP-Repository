const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')


// database
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

dotenv.config()

app.listen(process.env.PORT, () =>{
    connectDB()
    console.log("app is running on port " + process.env.PORT);
})