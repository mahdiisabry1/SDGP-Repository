const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors');
const multer = require('multer')
const cookieParser = require('cookie-parser');
const path = require("path")
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
app.use("/images", express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"http://localhost:5173", credentials: true}))
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)

//image 
const storage = multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)
    }
})

const upload= multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("Image has been uploaded")
})

app.listen(process.env.PORT, () =>{
    connectDB()
    console.log("app is running on port " + process.env.PORT);
})