const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

const orderServices = require('./orders.services')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        orderServices.getAllOrders
    )
    .post(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        orderServices.createOrder
    )


router.route('/:id')
    .patch(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        orderServices.patchOrder
    )

router.route('/:phone')
    .get(
        // passport.authenticate('jwt', { session: false }),
        orderServices.getOrderByPhone)

module.exports = router