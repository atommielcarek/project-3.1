const router = require('express').Router();
const Resume = require('../models/Resume');

router.post('/api/resume', async (req, res) => {
    try {
        const addResume = await Resume.create(req.body);
        addResume.save();
        res.status(200).json(addResume);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('api/resume/:id', async (req, res) => {
    try {
        const editResume = await Resume.findByIdAndUpdate(req.params.id, {
            $push: {
                info: req.body,
            }
        },
            {
                new: true,
            }
        );
        res.status(200).json(editResume);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('api/resume', async (req, res) => {
    try {
        const updateResume = await Resume.aggregate([
            {
                $addFields: {
                    totalDuration: {$sum: "$info.duration"}
                }
            }
        ]);
        res.status(200).json(previousWorkout);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router; 