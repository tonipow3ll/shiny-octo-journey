const express = require('express');
const router = express.Router();
const Location = require('../models/location')

router.get('/', (req, res) => {
    Location.find({}).then((loc) => {
        console.log("yoyyoyo")
        res.json(loc)
    })
});

router.post('/', async (req, res) => {
  const message = req.body;
  const newMsg = {
      message: req.body
  }
  try {
      let thisMsg = await Location.create({message: req.body.message}) 
      console.log('message sent')
      res.status(200)
      res.json(newMsg)
  } catch (err) {
      res.status(500).json(err)
  }
});


module.exports = router;