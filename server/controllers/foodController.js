const Food = require('../models/food');
const FoodCategory = require('../models/food_Category');


const createFood = async (req, res) => {
    try {
        console.log(req.body);
        const food = await Food.create(req.body);
        return res.status(200).json({
            data: food,
            message: "Successfully created the food",
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to create food",
        })
    }
}

const updateFood = async (req, res) => {
    try {
        console.log(req.params)
        console.log(req.body);
        const food = await Food.findOne(req.params);
        console.log("upar ka food", food);
        if (req.body.stocks) {
            food.stocks = req.body.stocks;
        }
        if (req.body.price) {
            food.price = req.body.price
        }
        if (req.body.item) {
            food.item = req.body.item;
        }
        if (req.body.food_url.length != 0) {
            console.log("here")
            for (let i = 0; i < req.body.food_url.length; i++) {
                food.food_url.push(req.body.food_url[i]);
            }
        }
        if (req.body.ratings) {
            food.ratings = req.body.ratings;
        }
        if (req.body.category) {
            food.ratings = req.body.category;
        }
        await food.save();
        console.log("niche ka food", food);
        return res.status(200).json({
            data: food,
            message: "Successfully updated the food",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to update food",
        })
    }
}

const deleteFood = async (req, res) => {
    try {
        console.log(req.params)
        console.log(req.body);
        const food = await Food.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            data: food,
            message: "Successfully deleted the food",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to delete food",
        })
    }
}

const getAllFood = async (req, res) => {
    try {
        const food = await Food.find().populate({
            path: 'category',
            select: 'name',
            model: FoodCategory
        });
        return res.status(200).json({
            data: food,
            message: "Successfully fetched the food",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to fetch food",
        })
    }
}

const getFood = async (req, res) => {
    try {
        console.log(req.params.id);
        const food = await Food.findById(req.params.id).populate({
            path: 'category',
            select: 'name',
            model: FoodCategory
        });
        console.log(food);
        return res.status(200).json({
            data: food,
            message: "Successfully fetched the food",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "not able to fetch3 food",
        })
    }
}

const searchFoodItems = async (req, res) => {
    console.log(req.query.k);
    const regex = new RegExp(req.query.k, 'i');
    console.log(regex);
    try {
        const items = await Food.find({ item: { $regex: regex } }).populate({
            path: 'category',
            select: 'name',
            model: FoodCategory
        });
        console.log(items);
        if (items.length === 0) {
            return res.status(202).json({
                success: false,
                message: "the food you have seach not availabe",
            });
        } else {
            return res.status(202).json({
                success: false,
                data: items,
                message: "the food you have searched!!!",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "food not available!!",
        })
    }
}

const findByCategory = async (req, res) => {
    try {
        console.log(req.params.categoryId);
        const food = await Food.find({ "category": req.params.categoryId }).populate({
            path: 'category',
            select: 'name',
            model: FoodCategory
        });
        console.log(food);
        return res.status(200).json({
            data: food,
            message: "Successfully fetched the food",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            err: error,
            message: "food not available!!",
        })
    }
}


module.exports = {
    createFood,
    updateFood,
    deleteFood,
    getAllFood,
    getFood,
    searchFoodItems,
    findByCategory
}