const Router =  require('express').Router();
const Exercise = require('../models/exercise.model')


Router.route('/').get((req,res)=>{
    Exercise.find()
        .then(exercises =>{res.json(exercises)})
        .catch(err => {res.status(400).json("Error :" + err)})

})



Router.route('/add').post((req,res)=>{

    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = Exercise({username,description,duration,date});

    newExercise.save()
        .then(exercises =>{res.json("Exercise Added")})
        .catch(err => {res.status(400).json("Error :" + err)})

})

module.exports = Router;