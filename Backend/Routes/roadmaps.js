const express = require('express');
const router = express.Router();
const Roadmap = require('../Models/Roadmap');

// Create a new roadmap
router.post('/createRoad', async (req, res) => {
    try {
        const roadmap = new Roadmap(req.body);
        await roadmap.save();
        res.status(201).send(roadmap);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all roadmaps
router.get('/', async (req, res) => {
    try {
        const roadmaps = await Roadmap.find();
        res.send(roadmaps);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;