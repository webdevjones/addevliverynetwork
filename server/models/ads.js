const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const adsSchema = mongoose.Schema({
    tag: {
        type: String,
    },
    type: {
        type: Number,
    },
    s3url: {
        type: String,
    },
    current: {
        type: Number,
    },
    link: {
        type: String,
    }
})

adsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Ads', adsSchema)