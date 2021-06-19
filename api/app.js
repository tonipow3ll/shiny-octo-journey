const express = require ('express')
const dotenv = require('dotenv')
const routes = require('./routes/');
const connectDB = require('./config/db')
const path = require('path');

// load config
dotenv.config({ path: './config/.env'})

// connect db
connectDB()

const app = express()
const PORT = process.env.PORT || 9000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
      });


app.listen(PORT, console.log(`server running on port ${PORT}!`))