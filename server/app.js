var express = require('express');
var app = express();
var mongoose = require('mongoose');

var connection = require('../modules/connection');
mongoose.connect(connection);

var Pet = require('../models/petModel');

var indexRouter = require('../routers/index');
app.use('/', indexRouter);

var petRouter = require('../routers/pets');
app.use('/pets', petRouter);

var portDecision = process.env.PORT || 3000;

var server = app.listen(portDecision, function(){
  var port = server.address().port;
  console.log("I'm listening, darling... port", port);
});
