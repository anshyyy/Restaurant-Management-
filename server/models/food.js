const mongoose = require('mongoose');
const FoodCategory = require('./food_Category');

const foodSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    food_url: {
        type: [String],
        required: true,
    },
    category : {
       type :  mongoose.Schema.Types.ObjectId,
       required : true,
    },
    rating: {
        type: mongoose.Schema.Types.Number,
        default: 0
    },
    price:{
        type: mongoose.Schema.Types.Number,
        required: true
    },
    stocks: {
        type: mongoose.Schema.Types.Number,
        required: true,
        default: 0
    }
},{timestamps:true});

const Food = mongoose.model("Food", foodSchema);


const food = [
    {
        item: "Samosa",
        price: 30,
        rating: 0,
        category : "646bb95d113162a170ea17ed",
        stocks: 25,
        food_url: [
            "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&quality=65&strip=all&ssl=1",
            "https://myfoodstory.com/wp-content/uploads/2021/08/Punjabi-Samosa-2.jpg"
        ]
    },
    {
        item: "Vada Pav",
        price: 40,
        ratings: 0,
        stocks: 18,
        category : "646bb95d113162a170ea17ed",
        food_url: [
            "https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg",
            "https://i0.wp.com/thetwincookingproject.net/wp-content/uploads/2020/01/Vada-Pav-with-Dry-Garlic-Chutney-12-scaled.jpg?fit=1707%2C2560&ssl=1"
        ]
    },
    {
        item: "Pani Puri",
        price: 20,
        ratings: 0,
        stocks: 30,
        category : "646bb95d113162a170ea17ed",
        food_url: [
            "https://assets.cntraveller.in/photos/60ba1de4e1b212c19a817ca6/4:3/w_1024,h_768,c_limit/pani-puri-home-recipe-1366x768.jpg",
            "https://media.istockphoto.com/id/511540742/photo/pani-puri-or-panipuri-golgappe-or-gol-gappe-chat-item.jpg?s=612x612&w=0&k=20&c=M7jqi1JW8G_WkBSUhW6krCzLBqRi0VxSZzHEcfRPPdo="
        ]
    },
    {
        item: "Bhel Puri",
        price: 35,
        ratings: 0,
        stocks: 40,
        category : "646bb95d113162a170ea17ed",
        food_url: [
            "https://www.vegrecipesofindia.com/wp-content/uploads/2012/08/bhel-puri-recipe-1.jpg",
            "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/bhel-puri.jpg"
        ]
    },
    {
        item: "Dosa",
        price: 50,
        ratings: 0,
        stocks: 15,
        category : "646bb95d113162a170ea17ec",
        food_url: [
            "https://static.toiimg.com/thumb/54289752.cms?width=1200&height=900",
            "https://c2.staticflickr.com/8/7482/26911291874_9c7c661b79_z.jpg"
        ]
    },
    {
        item : "Mango Drink",
        price : 90,
        ratings : 3.2,
        stocks : 14,
        category : "646bb95d113162a170ea17ee",
        food_url: [
            "https://www.cubesnjuliennes.com/wp-content/uploads/2022/07/Mango-Juice-Recipe.jpg",
            "https://www.thespruceeats.com/thmb/2gT0yOgYqVMLDn4Xh7wt2_e8Jrk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mango-passion-cocktail-3217025-hero-01-df042d4619d44d3e8d22992f3d72eb6c.jpg"
        ]
    },
    {
        item : "Veg Salad",
        price : 50,
        ratings : 3.2,
        stocks : 14,
        category : "646bb95d113162a170ea17ef",
        food_url: [
            "https://somuchfoodblog.com/wp-content/uploads/2022/11/italian-chopped-salad12.jpg.webp",
           
        ]
    }
];


Food.find().then(async (value) => {
    console.log("Food", value.length);
    if (value.length === 0) {
        await Food.insertMany(food, { ordered: false });
    }
});

module.exports = Food;

