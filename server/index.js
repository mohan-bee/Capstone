const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const { connectDB } = require('./config/db')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

const corsOptions = {
    origin: process.env.CLIENT_URL, 
    credentials: true,
    methods: 'GET,POST', 
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', require('./routes/user.route'))


app.listen(PORT, () => {
    try {
        connectDB()
        console.log(`Server is running at ${PORT}`)
    } catch (error) {
        console.error(error.message)
    }
})