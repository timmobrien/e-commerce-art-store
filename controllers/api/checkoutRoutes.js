const { Order, Cart } = require('../../models')
const isAuthenticated = require('../../utils/isAuthenticated')

const router = require('express').Router()



router.post('/checkout/confirm-order', isAuthenticated , async (req, res, next) => {
    try {
        const orderData = await Order.create({
            total_price: req.session.cart.totalPrice,
            user_id: req.session.userId
        })

        // req.session.cart = await new Cart({})    // Doesn't work
        req.session.destroy(() => {    // doesn't work
            res.status(204).end();
        });
        res.status(200)

    } catch (err) {
        console.log(err)
        console.log('hello')
        res.status(500).json(err)
    }
})

module.exports = router