const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    compid: {
        type: Number,
        required: true
    },
    compname: {
        type: String,
        required: true
    },
    complogo: {
        type: String,
        required: false
    },
},
    { collection: 'company' })

module.exports = Company = mongoose.model('company', CompanySchema)