const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const jwt = require('jsonwebtoken');

//REGISTER 
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json("User not found !");
        }
        if (user.password !== req.body.password) {
            return res.status(401).json("Wrong credentials");
        }
        const token = jwt.sign({ _id: user._id, username: user.username, email: user.email }, process.env.SECRET, { expiresIn: "3d" });
        const { password, ...info } = user._doc;
        res.cookie("token", token).status(200).json(info);
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGOUT
router.get("/logout", async (req, res) => {
    try {
        res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully");
    } catch (error) {
        res.status(500).json(error);
    }
});

// REFETCH
router.get("/refetch", (req, res) => {
    const token = req.cookies.token;
    jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
        if (err) {
            return res.status(404).json(err);
        }
        res.status(200).json(data);
    });
});

module.exports = router;
