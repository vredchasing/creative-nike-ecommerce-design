const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors({
  origin:'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}))

require('dotenv').config();

// MongoDB models/setup
const {User} = require('./Models')

const URI = process.env.MONGODB_URI;

mongoose.connect(URI)
  .then(()=>{
    console.log('Connected to database')
  })
  .catch(err => {
    console.log("Connection error", err)
  })

// Controller imports

const {checkUsernameExists, checkEmailExists} = require('./Controllers.js/userSignupController.js')

//check username availability 

app.get('/check-username-availability/:username', async (req, res)=>{
  const {username} = req.params
  try{
    const usernameExists = await checkUsernameExists(username)
    if(usernameExists){
      return res.status(200).json({error:"username is unavailable"})
    }
    else if (usernameExists==false){
      return res.status(200).json({message:'username is available'})
    }
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:"Error checking username availability"})
  }
  
})

//check email availability

app.get('/check-email-availability/:email', async (req, res)=>{
  const {email} = req.params
  console.log(email)
  try {
    const emailExists = await checkEmailExists(email)
    if(emailExists){
      return res.status(200).json({error:'email is already in use'})
    }
    else if (emailExists==false){
      return res.status(200).json({message: 'email is available'})
    }
  }
  catch(error){
    console.log(error)
    res.status(500).json({error:"Error checking email availability"})
  }
})


// Register users
app.post('/register', async (req, res) => {
  const {firstName, lastName, username, email, password} = req.body
  console.log(firstName)
  try {
    const usernameExists = await checkUsernameExists(username)
    if (usernameExists){
      return res.status(400).json({error:"username is unavailable"})
    }
    const emailExists = await checkEmailExists(email)
    if (emailExists){
      return res.status(400).json({error:"email is already in use"})
    }
    console.log('yooo')
    const newUser = new User({firstName, lastName, username, email, password})
    await newUser.save()
    return res.status(200).json({message:"Successfully created new user"})

  }
  catch(error){
    console.log(error)
  }
})

app.post('/login', (req,res) => {
  const {email, password} = req.body
  try {

  }
  catch(error){
    console.log(error)
  }
})


app.listen(port, ()=> {
  console.log(`Connected to port ${port}`)
})