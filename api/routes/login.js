const dotenv = require('dotenv');
const User = require('../models/user');
dotenv.config({ path: './config/.env' });


const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    User.find({}).then((user) => {
        // console.log(user)
        res.json(user)
    })
});


router.post('/', async (req, res) => {
    const userProf = req.body;
    const newUser = {
        email: req.body.email
    }
    let user = await User.findOne({ email: userProf.email })
    if (user) {
        // console.log('user found')
        res.status(200)
        res.json(user)
    } else {
        user = await User.create(newUser)
        // console.log('user created')
        res.status(200)
        res.json(user)
    }
})



module.exports = router;
