var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name: { type: String, required: true },
  animal_type: {type: String, enum: ['dog', 'cat', 'chicken', 'other']},
  age: { type: Number, min: 0, max: 10000 },
  image: { type: String, default: "https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg"}
});

var PetModel = mongoose.model('pets', petSchema);

module.exports = PetModel;
