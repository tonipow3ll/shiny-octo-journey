// const router = require('express').Router();
const dotenv = require('dotenv')
const User = require('../models/user')
dotenv.config({ path: './config/.env' })

// ROUTE TO HERE IS LOCALHOST:#/LOGIN


const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    User.find({}).then((user) => {
        console.log(user)
        res.json(user)
    })
});

// Workout.find({})
// .then((dbWorkouts) => {
//     console.log(dbWorkouts)
//     res.json(dbWorkouts);
// })
// .catch((err) => {
//     res.status(400).json(err);
// });

// module.exports = router;
// WILL BE the post route for LOGIN

router.post('/', async (req, res) => {
    const userProf = req.body;
    // console.log(req.body)
    // const client = new MongoClient('mongodb+srv://ToniPow3ll:' + process.env.MONGO_PASSWORD + '@cluster0.ssdij.mongodb.net/THETIDES?retryWrites=true&w=majority');
    // const db = MongoClient.db('db-name');
    // const users = db.collection('users');
    
// User.findOne({ email: userProf.email })
    User.findOne({ email: userProf.email }).then(() => {
        // if (!User.email === userProf.email) {
            // console.log("HELLO")
            // res.status(200)
            newUser = {
                email: req.body.email,
                // password: req.body.password
            }
            // console.log(newUser)
            User.create(newUser).then((newUser) => {
                res.json(newUser)
                res.status(200)
            }).catch((err) => {
                res.status(400).json(err)
            })
            // client.close();
            // return callback(err || new WrongUsernameOrPasswordError(email));
        // } 
       
            // console.log("Im getting hung up here, no 200 status")
            // res.status(200)
        
        // bcrypt.compare(User.password, req.body.password, function (err, isValid) {
        // //     // client.close();

        //     if (req.body.password || !isValid) {
        //         res.status(400).json(err)
        //     } else {
        //         res.status(200)
        //     }

        //     // return callback(null, {
        //     //     user_id: user._id.toString(),
        //     //     nickname: user.nickname,
        //     //     email: user.email
            // });
        });
    })

    // User.findOne({ email: userProf.email }, function (err, user) {
    //     if (err || !user) {
    //         client.close();
    //         return callback(err || new WrongUsernameOrPasswordError(email));
    //     }
    //     bcrypt.compare(password, userProf.password, function (err, isValid) {
    //         client.close();

    //         if (err || !isValid)
    //             return callback(err || new WrongUsernameOrPasswordError(email));

    //         return callback(null, {
    //             user_id: user._id.toString(),
    //             nickname: user.nickname,
    //             email: user.email
    //         });
    //     });
    // });
// })



module.exports = router;
