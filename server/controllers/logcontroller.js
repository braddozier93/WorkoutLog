
const router = require('express').Router()
const Log=  require('../db').import('../models/log');

//POST -- allows users to create a log wth description, definition, results
router.post('/', (req, res) => {
    const logFromRequest = {
        descriptionOfWorkout: req.body.descriptionOfWorkout,
        definitionOfWorkout: req.body.definitionOfWorkout,
        result: req.body.result,
        ratingOfWorkout: req.body.ratingOfWorkout
    }
    Log.create(logFromRequest)
        .then(log => res.status(200).json({
            log: log
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

// GET REQUEST --- gets all logs for an individual user
router.get('/', (req,res) => {
    Log.findAll()
        .then(logs => res.status(200).json({
            logs: logs
        }))
        .catch(err => res.status(500).json({
            error: err
        }))
})

//QUERY WORKOUT LOG BY ID /:id need to match. FindOne will find the first one to match
//gets individual logs for a user
router.get('/:id', (req,res) => {
    Log.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json({
        log: log
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//UPDATE METHOD -- PUT  allows logs to be updated by a user
router.put('/:id', (req, res) => {
    Log.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json({
        log: log
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

//DELETE METHOD - DELETE individual logs by a user
router.delete('/:id', (req,res) => {
    Log.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(log => res.status(200).json({
        log: log
    }))
    .catch(err => res.status(500).json({
        error: err
    }))
})

module.exports = router;