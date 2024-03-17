const express=require('express')
const router=express.Router()
const User=require('../Models/User')
const bcrypt=require('bcrypt')
const Post=require('../Models/Post')
const Comment=require('../Models/Comment')

//CREATE
router.post("/create",async (req,res)=>{
    try{
        const newPost=new Post(req.body)
        // console.log(req.body)
        const savedPost=await newPost.save()
        
        res.status(200).json(savedPost)
    }
    catch(error){
        
        res.status(500).json(error)
    }
     
})

//UPDATE
router.put("/:id",async (req,res)=>{
    try{
       
        const updatedPost=await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedPost)

    }
    catch(err){
        res.status(500).json(err)
    }
})


//DELETE
router.delete("/:id",async (req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id)
        await Comment.deleteMany({postId:req.params.id})
        res.status(200).json("Post has been deleted!")

    }
    catch(error){
        res.status(500).json(error)
    }
})


//GET POST DETAILS
router.get("/:id",async (req,res)=>{
    try{
        const post=await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(error){
        res.status(500).json(error)
    }
})

//GET POSTS
router.get("/",async (req,res)=>{
    
    try{
        const posts=await Post.find()
        res.status(200).json(posts)
    }
    catch(error){
        res.status(500).json(error)
    }
})

//GET USER POSTS
router.get("/user/:userId",async (req,res)=>{
    try{
        const posts=await Post.find({userId:req.params.userId})
        res.status(200).json(posts)
    }
    catch(error){
        res.status(500).json(error)
    }
})



module.exports=router