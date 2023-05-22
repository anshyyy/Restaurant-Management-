const mongoose = require('mongoose');

const food_category = new mongoose.Schema({
    name: {
        type: String,
    }
});

const FoodCategory = mongoose.model('FoodCategory', food_category);

let category = [{
    name: "Tummy Fullers"},
{ name: "Quick Snacks" }, { name: "Drinks" }, { name: "Salads" }
];
FoodCategory.find().then(async (value) => {
    console.log("FoodCategory", value.length);
    if (value.length === 0) {
        await FoodCategory.insertMany(category, { ordered: false });
    }
});
module.exports = FoodCategory;
