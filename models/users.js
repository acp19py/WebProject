const userSchema = new Schema({
    Name: String,
    Email: String,
    Password: String,
    Phone: String,
    AllForm: [{type:Schema.Types.ObjectId,ref:'adoptionforms'}],
});

const users = mongoose.model('users',userSchema);

module.exports= users;