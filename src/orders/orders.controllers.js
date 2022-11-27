const uuid = require('uuid')
const Order = require('../models/orders.models')


const getAllOrders = async () => {
    const data = await Order.findAll()
    return data
}


const getOrderByPhone=async(phone)=>{
    const data=await Order.findAll({
        where:{phone},
    })
    return data
}


const createOrder = async (data) => {
    const response = await Order.create({
        id: uuid.v4(),
        name:data.name,
        phone:data.phone,
        title: data.title,
        description: data.description,
        imageurl:data.imageurl,
        cost:data.cost,
        process:data.process,
        location:data.location,
        designer:data.designer,
        maker:data.maker
    })
    return response
}

const updateOrder = async (id, data) => {
    const result = await Order.update(data, {
        where: {
            id
        }
    })
    return result
}


module.exports = {
    createOrder,
    getAllOrders,
    getOrderByPhone,
    updateOrder
}


