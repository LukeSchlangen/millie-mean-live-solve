var express = require('express');
var router = express.Router();

var PetModel = require('../models/petModel');

router.get('/test', function(req, res){
  console.log('in test');
  var lucy = new PetModel(  {
    name: 'Lucy',
    animal_type: 'dog',
    age: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG"
  });

  lucy.save(function(err){
    if(err){
      console.log("ERROR!!!!!!!!");
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("Lucy Saved!");
      res.sendStatus(201);
    }
  });
})

router.get('/', function(req,res){
  console.log('in pets post');
  res.sendStatus(200);
})

router.post('/', function(req,res){
  console.log('in pets post');
  res.sendStatus(200);
});

module.exports = router;
