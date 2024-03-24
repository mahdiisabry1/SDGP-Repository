const mongoose = require('mongoose');

// Define the roadmap schema
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
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create the Roadmap model based on the schema
const Roadmap = mongoose.model('Roadmap', roadmapSchema);

// Export the Roadmap model
module.exports = Roadmap;
