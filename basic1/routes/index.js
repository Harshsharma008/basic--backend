var express = require('express');
var router = express.Router();
const userModel = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// create the collection
// router.get('/create', async function(req, res, next) {
//   const createduser= await userModel.create({
//     username:"harsh",
//     age:24,
//     name:"harsh"
//   });
//   res.send(createduser);
// });

// get all the data from the collections
// router.get('/find', async function(req, res, next) {
//   let users= await userModel.find();
//   res.send(users);
// });
// find single user of data from collections
// router.get('/finedOne', async function(req, res, next){
//   let user = await userModel.findOne({username:"harsh"});
//   res.send(user);
// })
 router.get("/", function(req,res){
  req.session.ban = true;
  req.render("index");
 });

 router.get("/checkban", function(req,res){
  console.log(req.session);
  res.send("check kiya hai console dekho"); 
 })

module.exports = router;
