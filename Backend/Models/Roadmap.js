const mongoose = require('mongoose');

const roadmapSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    steps: [{
        title: String,
        description: String
    }],
    username:{
        type:String,
        required:true,  
    },
    userId:{
        type:String,
        required:true,  
    },
}, { timestamps: true });

const Roadmap = mongoose.model('Roadmap', roadmapSchema);

module.exports = Roadmap;