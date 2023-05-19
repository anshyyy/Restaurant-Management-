const Order = require('../models/order');

const createOrder = async(req,res)=> {
    try {
        let data = req.body;
        data.userId = req.params.userId
        console.log(data);
        const order = await Order.create(data);
        return res.status(200).json({
            success : true,
            data : order,
            message:"Successfully created the order"
        })
        
    } catch (error) {
        return res.status(501).json({
            message : "Not able to create order",
            err : error,
            success:false
        });
    }
}

const getPendingOrders = async(req,res)=>{
    try {
        const order = await Order.find({status:"pending"});
        return res.status(200).json({
            success : true,
            data : order,
            message:"Successfully fetched the orders"
        })
    } catch (error) {
        return res.status(501).json({
            message : "Not able to fetch pending orders",
            err : error,
            success:false
        });
    }
}

const completeOrder = async(req,res)=>{
    try {
        const orderId = req.params.id
        const order = await Order.findByIdAndUpdate(orderId,{status : "completed"},{new:true});
        return res.status(200).json({
            success : true,
            data : order,
            message:"Successfully completed the orders"
        });
    } catch (error) {
        return res.status(501).json({
            message : "Not able to complete order",
            err : error,
            success:false
        });
    }
}

module.exports = {
    createOrder,
    getPendingOrders,
    completeOrder,
}