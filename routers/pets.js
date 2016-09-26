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
});

router.get('/', function(req,res){
  console.log('in pets get');
  PetModel.find({}, function(err, petResults){
    if(err){
      console.log("ERROR!!!!!!!!");
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(petResults);
      res.send(petResults);
    }
  });
});

router.post('/', function(req,res){
  console.log('in pets post');
  var sentPet = req.body;
  console.log('sentPet = ', sentPet);

  var newPet = new PetModel({
    name: sentPet.name,
    animal_type: sentPet.animal_type,
    age: sentPet.age,
    image: sentPet.image
  })

  newPet.save(function(err){
    if(err){
      console.log("ERROR!!!!!!!!");
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log("New pet Saved!");
      res.sendStatus(201);
    }
  });
});

module.exports = router;
