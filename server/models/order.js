const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item: String,
    count: Number,
    price: Number
});

const orderSchema = new mongoose.Schema({
    items: [itemSchema],
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    status : {
       type:String,
       enum :["pending","completed"],
       default:"pending"
    },
    total_price : {
        type:mongoose.Schema.Types.Number,
        required:true
    },
}, { timestamps: true });

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;
