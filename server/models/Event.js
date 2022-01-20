const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    fromTime: {
        type: String,
        required: true
    },
    toTime: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    joiningInfo: {
        type: String,
    },
    resource: {
        type: String,
    },
    organise: {
        type: String,
    },
    tag: {
        type: String,
    },
})

module.exports = mongoose.model('Event', eventSchema)