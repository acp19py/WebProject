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

module.exports= adoptionforms;