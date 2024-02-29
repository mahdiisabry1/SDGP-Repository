const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const authRoute = require('./Routes/auth')


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
app.use(express.json())
app.use("/api/auth", authRoute)


app.listen(process.env.PORT, () =>{
    connectDB()
    console.log("app is running on port " + process.env.PORT);
})