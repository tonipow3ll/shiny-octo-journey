const express = require ('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// load config
dotenv.config({ path: './config/.env'})

// connect db
connectDB()

const app = express()

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`server running on port ${PORT}!`))