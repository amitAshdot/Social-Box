
const mongoose = require('mongoose')

const IndustrySchema = new mongoose.Schema({
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
    { collection: 'rev_range' })

module.exports = RevRange = mongoose.model('rev_range', IndustrySchema)