const mongoose = require('mongoose');


const feedBackSchema = new mongoose.Schema({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    foodId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Food",
        required:true
    },
    description : {
        type:String,
    },
    stars : {
        type:mongoose.Schema.Types.Number,
        require:true
    }

},{timestamps:true});

const FeedBack = mongoose.model("FeedBack",feedBackSchema);

module.exports = FeedBack;
