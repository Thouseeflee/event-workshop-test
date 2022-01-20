const mongoose = require('mongoose')
const Schema = mongoose.Schema


const moderatorSchema = new Schema({
    name: {
        type: String
    },
    about: {
        type: String
    },
    id: {
        type: Schema.Types.ObjectId,
        ref: 'Event'
    }


})

module.exports = mongoose.model('Moderator', moderatorSchema)