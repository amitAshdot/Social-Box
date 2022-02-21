//MongoDB Connection with Mongoose
// import mongoose from 'mongoose';
// import config from 'config'
const mongoose = require('mongoose')
const config = require('config')

const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
        console.log('mongoose mongodb connected')
    } catch (error) {
        console.error(error.message);
        process.exit(1) // exit procces with failure
    }
}

module.exports = connectDB;
// export default connectDB;