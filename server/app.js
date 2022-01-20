if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Event = require('./models/Event')
const Speaker = require('./models/Speaker')
const Moderator = require('./models/Moderator')
const dbUrl = process.env.DB_URL

app.use(express.json())
app.use(cors())

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Connected to Mongoose!!");
})
.catch(err => {
    console.log('Got Error !!!!!');
    console.log(err);
})

app.get('/', async (req,res) => {
    const events = await Event.find({})
    res.send(events)
})
app.post('/post', async(req,res) => {
    const {speakers, moderator} = req.body
    const event = await new Event(req.body)
    speakers.map((val => {
        const spk = new Speaker()
        spk.name = val.name
        spk.about = val.about
        spk.id = event._id
        if(val.name && val.about){
        spk.save()
        }
}))

      moderator.map((val => {
          const mod = new Moderator()
          mod.name = val.moderatorName
          mod.about = val.moderatorAbout
          mod.id = event._id
          console.log(mod);
          if(val.moderatorName && val.moderatorName){
              console.log(mod);
              mod.save()
          }
        }))
try {
    await event.save()
    // res.send("from backend",event)
    res.send
} catch (e) {
    console.log(e);
    // res.send(e)
}
})
app.listen('3001', (req,res) => {
    console.log("Listening on port 3001");
})