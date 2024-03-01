const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require('./Routes/auth')
const userRoute = require('./Routes/users')
const postRoute = require('./Routes/posts')
const commentRoute = require('./Routes/comments')


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
app.use(cors({origin:"http://localhost:5173", credentials: true}))
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)


app.listen(process.env.PORT, () =>{
    connectDB()
    console.log("app is running on port " + process.env.PORT);
})