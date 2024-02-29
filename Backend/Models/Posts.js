const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    tile:{
        type: String,
        required: true,
        unique: true
    },
    desc:{
        type: String,
        required: true,
        unique: true,
    },
    photo:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true,
    },
    categories:{
        type: Array,
        required: false,
    },

},{timestamps:true}) 

module.exports = mongoose.model("Posts", PostsSchema);