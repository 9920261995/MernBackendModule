const Router =  require('express').Router();
let User = require('../models/user.model')



Router.route('/').get((req,res)=>{
    User.find()
        .then(users =>{
            res.json(users)
        })
        .catch(err=>{
            res.status(400).json("Error :" + err)
        })
})

Router.route('/add').post((req,res)=>{
    let username = req.body.username

    let newUser = new User({username})

    newUser.save()
        .then(user => { res.json("User Added :" + user)})
        .catch(err => { res.status(400).json("Error : " + err)})
})

module.exports = Router;