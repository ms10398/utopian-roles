var express = require('express');
var router = express.Router();
const user = require('../models/users');


/* GET home page. */
router.get('/roles/:name', function(req, res, next) {
  let username = req.params.name
  user.find({ name: username }, function (err, data) {
    if(err)
      console.log(err)
    let isPresent = data.length
    if(isPresent > 0)
    {
      res.json({
        roles: data[0].roles
      })
    }
    else {
      res.json({
        message: 'User not present in DB'
      })
    }
  })
});

module.exports = router;
