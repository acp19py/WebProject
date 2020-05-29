var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const commentSchema = new Schema({
    Name: String,
    Content: String,
    Date: Date,
});

const comment = mongoose.model('Comment', commentSchema);

const animalSchema = new Schema({

    Type: String,
    Gender: String,
    Kind: String,
    Color: String,
    Age: Number,
    Location: String,
    Status: String,
    Vaccine: String,
    Description: String,
    Comment:[commentSchema],
    Image:String
});

const animals = mongoose.model('animals',animalSchema);


module.exports= {animals,comment};