var express = require('express');
var router = express.Router();
var userModel= require('./users');
const passport = require('passport');

// below 2 lines help to perform login (heart of the passport)
const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// flash m data bnaya
// router.get('/failed', function(req, res) {
//   req.flash("age",21);
//   res.send("bn gya ");
// });
 

// check kiya ki data aata  h kya flash se
// router.get('/check', function(req, res) {
//   console.log(req.flash("age"));
//   res.send("backend k console p");
// });


// router.get('/create',async function(req,res){
//   let userdata = await userModel.create({
//     username:"harsh",
//     nickname: "String",
//     description: "i am a developer",
//     categories:['js','node'],
    
//   });
//   res.send(userdata);
// })


// register and other for authentication
router.post('/register', function(req,res){
  var userdata = new userModel({
    username: String,
    password: String,
    secret:String
  });

userModel.register(user,req.body.password)
.then(function(registerduser) // these two lines for creation of account
{
passport.authenticate("local")(req,res,function(){
  res.redirect('/profile');   // these two lines help for the account login and go to other route 
})
})


})

router.post('/login',passport.authenticate("local", {
   successRedirect:"/profile",
   failureRedirect:"/"
}), function(req,res){})

router.get("/logout",function(req,res,next){
  req.logOut(function(err){
    if(err) return next(err);
    res.redirect('/');
  })
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

router.get('/profile',isLoggedIn ,function(req,res){
  res.send("welcome to profile");
})
module.exports = router;
