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
    Vaccine: Boolean,
    Description: String,
    Comment:[commentSchema],
});

const animals = mongoose.model('animals',animalSchema);

const userSchema = new Schema({
    Name: String,
    Email: String,
    Password: String,
    Phone: String,
    AllForm: [{type:Schema.Types.ObjectId,ref:'adoptionforms'}],
});

const users = mongoose.model('users',userSchema);

const adoptionformSchema = new Schema({
    UserID:{type: Schema.Types.ObjectId,ref:'users'},
    AnimalID:{type:Schema.Types.ObjectId,ref:'animals'},
    Location: String,
    Experience: String,
    Job: String,
    Status: String,
    AdoptReason: String,
    Age: Number,
    Income: Number,
});

const adoptionforms = mongoose.model('adoptionforms',adoptionformSchema);

module.exports={
    comment,
    animals,
    users,
    adoptionforms,
};
