const express = require('express');
const user = require('../models/users');
const router = express.Router();

router.get('/roles/:name', (req, res) => {
  const username = req.params.name
  user.find({
    name: username
  }, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        message: 'Error'
      })
    }
    data.length > 0 ? res.json({
      roles: data[0].roles
    }) : res.json({
      message: 'User not present in DB'
    })
  })
})

module.exports = router;
