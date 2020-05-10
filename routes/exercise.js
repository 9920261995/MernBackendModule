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
    const date = req.body.date

    const newExercise = Exercise({username,description,duration,date});

    newExercise.save()
        .then(() =>{res.json("Exercise Added"+ req.body.date)})
        .catch(err => {res.status(400).json("Error :" + err)})

})


Router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercises =>{res.json(exercises)})
        .catch(err => {res.status(400).json("Error :" + err)})
});


Router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
        .then(()=>{res.json("Exercise Deleted!!")})
        .catch(err => {res.status(400).json("Error :" + err)})
})

Router.route('/update/:id').post((req,res)=>{
    Exercise.findById(req.params.id)
        .then((exercises)=>{
            exercises.username = req.body.username;
            exercises.description = req.body.description;
            exercises.duration = Number(req.body.duration)
            exercises.date = req.body.date

            exercises.save()
                .then(()=>{res.json("Exercise Updated!!" + req.body.date)})
                .catch(err => {res.status(400).json("Error :" + err)})

        })
        .catch(err => {res.status(400).json("Error :" + err)})
})
module.exports = Router;