const { Order, Cart, User } = require('../../models')
const isAuthenticated = require('../../utils/isAuthenticated')

const router = require('express').Router()



router.post('/checkout/confirm-order', isAuthenticated , async (req, res, next) => {
    try {

        const orderUser = await User.findByPk(req.session.userId, {
            raw: true,
            plain:true
        })



        const cartItems = new Cart(req.session.cart)

        const cartArr = cartItems.toArray()

        const orderItems = cartArr.map(cartItem => {
            return {
               itemName: cartItem.item.title,
               itemQty: cartItem.qty
            }
        })
        

        
        //TODO: Map through cart array and get each item, put it into an array and then store it in DB
    


        const orderData = await Order.create({
            total_price: req.session.cart.totalPrice,
            order_items: JSON.stringify(orderItems),
            shipping_address: orderUser.address,
            user_id: req.session.userId,
        })

        const emptyCart = new Cart({})

        req.session.cart = emptyCart

        res.status(200).end()

    } catch (err) {
        console.log(err)
        console.log('hello')
        res.status(500).json(err)
    }
})

module.exports = router