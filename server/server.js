const express = require('express')
const connectDB = require('./config/DB.js')

const app = express()

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }))


app.get('/', (req, res) => res.send('API running'))


//Define Routes
app.use('/api/company', require('./routes/api/company'))
app.use('/api/data', require('./routes/api/data'))
app.use('/api/rev-range', require('./routes/api/rev_range'))
app.use('/api/industry', require('./routes/api/industry'))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))