const express = require ('express')
const dotenv = require('dotenv')
const routes = require('./routes/');
const connectDB = require('./config/db')

// load config
dotenv.config({ path: './config/.env'})

// connect db
connectDB()

const app = express()
const PORT = process.env.PORT || 9000;

app.use(routes);

// keeping these handy for later 
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.listen(PORT, console.log(`server running on port ${PORT}!`))