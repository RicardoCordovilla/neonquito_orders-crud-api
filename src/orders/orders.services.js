const ordersController = require('./orders.controllers')

const getAllOrders = (req, res) => {

    const phone = req.params.phone
    ordersController.getAllOrders(phone)
        .then(data => {
            res.status(200).json({
                results: data,
            })
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}


const createOrder = (req, res) => {
    const { name, phone, title, description, imageurl, cost, process, location, designer, maker,finishdate } = req.body
    if (name && phone && title && description && imageurl && cost && process && location && designer && maker,finishdate) {
        ordersController.createOrder({ name, phone, title, description, imageurl, cost, process, location, designer, maker,finishdate })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json(err.message)
            })
    } else {
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                name: 'string',
                phone: 'string',
                title: 'string',
                description: 'string',
                imageurl: 'link',
                cost: 'integer',
                process: 'integer 0-5',
                location: 'string',
                designer: 'string',
                maker: 'string',
                finishdate:'yyyy/mm/dd'
            }
        })
    }

}

const getOrderByPhone = (req, res) => {
    const phone = req.params.phone
    ordersController.getOrderByPhone(phone)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => { res.status(400).json({ message: err.message }) })
}


const patchOrder = (req, res) => {
    const id = req.params.id
    const { name, phone, title, description, imageurl, cost, process, location, designer, maker,finishdate } = req.body

    ordersController.updateOrder(id, { name, phone, title, description, imageurl, cost, process, location, designer, maker,finishdate })
        .then(data => {
            if (data[0]) {
                res.status(200).json({ message: `User with ID: ${id}, edited succesfully!` })
            } else {
                res.status(400).json({ message: 'Invalid ID' })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message })
        })
}

module.exports = {
    getAllOrders,
    getOrderByPhone,
    createOrder,
    patchOrder
}