const FeedBack = require('../models/feedback');
const Food = require('../models/food');
const User = require("../models/user");

const createFeedBack = async (req, res) => {
    try {
        let data = req.body;
        data.userId = req.query.userId;
        data.foodId = req.query.foodId;
        let feedback = await FeedBack.create(data);
        const newStars = feedback.stars;
        const foodId = req.query.foodId;
        updateRatingsOfFood(newStars,foodId);
        return res.status(201).json({
            message: "Created feedback Successfully",
            success: true,
            data: feedback
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message: "Not able to create feedback",
            err: error,
            success: false,
        })
    }
}

const updateRatingsOfFood = async(newStars,foodId)=> {
      // console.log(newStars,foodId);
       const food = await Food.findById(foodId);
       let size = (await FeedBack.find({"foodId":foodId})).length;
      // console.log(food.rating,size);
       if(size==0)size=1;
       const newRating = (food.rating + newStars)/size;
       //console.log(newRating);
       if(newRating>=5) newRating = 5;
       await Food.findByIdAndUpdate(foodId,{rating:newRating},{new:true});
}

const updateFeedBack = async (req, res) => {
    try {

        let feedback = await FeedBack.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(req.body.stars){
            updateRatingsOfFood(req.body.stars,feedback.foodId)
        }
        return res.status(201).json({
            message: "Updated feedback Successfully",
            success: true,
            data: feedback
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message: "Not able to update feedback",
            err: error,
            success: false,
        })
    }
}

const deleteFeedBack = async (req, res) => {
    try {
        let feedback = await FeedBack.findByIdAndRemove(req.params.id)
        return res.status(201).json({
            message: "deleted feedback Successfully",
            success: true,
            data: feedback
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message: "Not able to delete feedback",
            err: error,
            success: false,
        })
    }

}
const getFeedBack = async (req, res) => {
    try {

        let feedback = await FeedBack.find(req.params).populate({
            path: 'userId',
            select: 'name'
          })
            .populate({
                path: 'foodId',
                select: 'item'
              })
        return res.status(201).json({
            message: "Fetched feedback's Successfully",
            success: true,
            data: feedback
        });
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            message: "Not able to Fetch the feedback",
            err: error,
            success: false,
        })
    }
}



module.exports = {
    createFeedBack,
    updateFeedBack,
    deleteFeedBack,
    getFeedBack,
}