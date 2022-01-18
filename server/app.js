const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Event = require('./models/Event')

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/eventworkshop", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to Mongoose!!");
})
.catch(err => {
    console.log('Got Error !!!!!');
    console.log(err);
})

app.get('/', (req,res) => {
    res.send("i'm from backend")
})
app.post('/post', async(req,res) => {
    const event = await new Event(req.body)
     console.log(req.body);
    try {
       await event.save()
        res.send(event)
        console.log("success");
    } catch (error) {
        res.send(e)
    }
})
app.listen('3001', (req,res) => {
    console.log("Listening on port 3001");
})