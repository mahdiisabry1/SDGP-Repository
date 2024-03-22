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
        res.status(200).json(roadmaps)
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update roadmap
router.put('/update/:id', async (req, res) => {
    try {
        
        const  updatedRoadmap = await Roadmap.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedRoadmap);

    } catch (err) {
        res.status(404).json({message: 'No roadmap found with that ID'});
    }
} );
        


// Delete roadmap
router.delete ('/:id', async (req, res) =>{
    await  Roadmap.remove({_id: req.params.id}, function(err){
        
      if(!err) {res.send("Deleted Successfully!")} 

      else 

      {res.send("Error in Deletion")}
    });    
})

module.exports = router;