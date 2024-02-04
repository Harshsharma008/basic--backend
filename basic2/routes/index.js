var express = require('express');
var router = express.Router();
var userModel= require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// flash m data bnaya
router.get('/failed', function(req, res) {
  req.flash("age",21);
  res.send("bn gya ");
});
 

// check kiya ki data aata  h kya flash se
router.get('/check', function(req, res) {
  console.log(req.flash("age"));
  res.send("backend k console p");
});


router.get('/create',async function(req,res){
  let userdata = await userModel.create({
    username:"harsh",
    nickname: "String",
    description: "i am a developer",
    categories:['js','node'],
    
  });
  res.send(userdata);
})
module.exports = router;
