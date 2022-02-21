
const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    company: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    rev_range: {
        type: String,
        required: true
    },
    comission: {
        type: String,
        required: true
    },
},
    { collection: 'data' })

module.exports = Data = mongoose.model('data', DataSchema)