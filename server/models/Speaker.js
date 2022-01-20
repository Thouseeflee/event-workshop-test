const mongoose = require('mongoose')
const Schema = mongoose.Schema


const speakerSchema = new Schema({
    name: {
        type: String
    },
    about: {
        type: String
    },
    id: {
        type: Schema.Types.ObjectId,
        ref: 'Moderator'
    }


})

module.exports = mongoose.model('Speaker', speakerSchema)