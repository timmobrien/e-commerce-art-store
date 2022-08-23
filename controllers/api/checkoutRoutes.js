const { Order, Cart, User } = require('../../models')
const isAuthenticated = require('../../utils/isAuthenticated')

const router = require('express').Router()



router.post('/checkout/confirm-order', isAuthenticated , async (req, res, next) => {
    try {

        const orderUser = await User.findByPk(req.session.userId, {
            raw: true,
            plain:true
        })
        console.log(orderUser)



        const cartItems = req.session.cart.items
        //TODO: Map through cart array and get each item, put it into an array and then store it in DB
    


        const orderData = await Order.create({
            total_price: req.session.cart.totalPrice,
            user_id: req.session.userId,
            shipping_address: orderUser.address
        })

        const emptyCart = new Cart({})

        req.session.cart = emptyCart
        // req.session.cart = await new Cart({})    // Doesn't work
        // req.session.destroy(() => {    // doesn't work
        //     res.status(204).end();
        // });
        res.status(200).end()

    } catch (err) {
        console.log(err)
        console.log('hello')
        res.status(500).json(err)
    }
})

module.exports = router