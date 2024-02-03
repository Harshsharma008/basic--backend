var express = require('express');
var router = express.Router();
const userModel = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/create', async function(req, res, next) {
  const createduser= await userModel.create({
    username:"harsh",
    age:24,
    name:"harsh"
  });
  res.send(createduser);
});

module.exports = router;
