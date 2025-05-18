const cookieParser = require('cookie-parser')
const express = require('express')
const cors = require('cors')
const { connectDB } = require('./config/db')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
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