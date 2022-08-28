const { Order, Cart, User } = require('../../models')
const isAuthenticated = require('../../utils/isAuthenticated')

const router = require('express').Router()


// Route for the confirm order button
router.post('/checkout/confirm-order', isAuthenticated , async (req, res, next) => {
    try {

        // Get the logged in user ID
        const orderUser = await User.findByPk(req.session.userId, {
            raw: true,
            plain:true
        })

        // Create new cart
        const cartItems = new Cart(req.session.cart)
        // Make cart an array
        const cartArr = cartItems.toArray()
        // Map through array and get the important bits
        const orderItems = cartArr.map(cartItem => {
            return {
               itemName: cartItem.item.title,
               itemQty: cartItem.qty,
               itemPrice: cartItem.price // check this works
            }
        })    

        // create new entry in DB
        const orderData = await Order.create({
            total_price: req.session.cart.totalPrice,
            order_items: JSON.stringify(orderItems),
            shipping_address: orderUser.address,
            user_id: req.session.userId,
        })

        // Create new empty cart
        const emptyCart = new Cart({})
        // Set the session cart to empty
        req.session.cart = emptyCart

        res.status(200).end()

    } catch (err) {

        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router