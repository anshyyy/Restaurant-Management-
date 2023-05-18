const Food = require('../models/food');

const createFood = async(req,res)=> {
      try {
        console.log(req.body);
        const food = await Food.create(req.body);
        return res.status(200).json({
            data:food,
            message:"Successfully created the food",
            success:true
        })
      } catch (error) {
        console.log(error);
        return res.status(501).json({
            success:false,
            err:error,
            message : "not able to create food",
        })
      }
}

const updateFood = async(req,res)=>{
    try {
        console.log(req.params)
        console.log(req.body);
        const food = await Food.findOne(req.params);
        console.log("upar ka food",food);
        if(req.body.stocks){
            food.stocks = req.body.stocks;
        }
        if(req.body.price){
            food.price = req.body.price
        }
        if(req.body.item){
            food.item = req.body.item;
        }
        if(req.body.food_url.length!=0){
            console.log("here")
            for(let i =0;i<req.body.food_url.length;i++){
                food.food_url.push(req.body.food_url[i]);
            }
        }
        if(req.body.ratings){
             food.ratings = req.body.ratings;
        }
        await food.save();
        console.log("niche ka food",food);
        return res.status(200).json({
            data:food,
            message:"Successfully updated the food",
            success:true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success:false,
            err:error,
            message : "not able to update food",
        })
    }
}

const deleteFood = async(req,res)=>{
    try {
        console.log(req.params)
        console.log(req.body);
        const food = await Food.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            data:food,
            message:"Successfully deleted the food",
            success:true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success:false,
            err:error,
            message : "not able to delete food",
        })
    }
}

const getAllFood = async(req,res)=>{
    try {
        const food = await Food.find();
        return res.status(200).json({
            data:food,
            message:"Successfully fetched the food",
            success:true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success:false,
            err:error,
            message : "not able to fetch food",
        })
    }
}

const getFood = async(req,res)=>{
    try {
        console.log(req.params.id);
        const food = await Food.findById(req.params.id);
        console.log(food);
        return res.status(200).json({
            data:food,
            message:"Successfully fetched the food",
            success:true
        });

    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success:false,
            err:error,
            message : "not able to fetch3 food",
        })
    }
}




module.exports = {
    createFood,
    updateFood,
    deleteFood,
    getAllFood,
    getFood,
}