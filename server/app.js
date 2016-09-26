var express = require('express');
var app = express();

var index = require('../routers/index');
app.use('/', index);

var pets = require('../routers/pets');
app.use('/pets', pets);

var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log("I'm listening, darling... port", port);
});
