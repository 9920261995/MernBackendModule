
const exercisesRouter = require('./routes/exercise')
const usersRouter = require('./routes/users')

const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 5000
const uri =process.env.ATLAS_URI

mongoose.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true})

// app.use(app.router);
// exercisesRouter.initialize(app);
// usersRouter.initialize(app);

app.use(cors())
app.use(express.json());

app.use("/exercise",exercisesRouter)
app.use("/users",usersRouter)





app.listen(port,()=>{
    console.log("As Leonard say 'Its a Saturnaria Miracle' ")
})
