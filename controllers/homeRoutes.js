
const router = require('express').Router()
const { raw } = require('express');
const { Artist, ArtPiece, Cart, Order } = require("../models");
const { formatDate } = require('../utils/helpers');
const isAuthenticated = require('../utils/isAuthenticated');


// Get all products for the home page
router.get('/', async (req, res, next) => {

    // Get all items in art-piece table
    try {
        const paintings = await ArtPiece.findAll({
            raw: true,
            nest:true,
            include:[{
                model: Artist,
            }],
        })

        res.render('products', {
            paintings,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err)
    }
})



// get one painting by id
router.get('/painting/:id', async (req, res, next) => {
    try {
        // Get painting by parameter PK
        const painting = await ArtPiece.findByPk(req.params.id, {
            raw: true,
            nest: true,
            include:[{
                model: Artist,
                attributes: [
                    'name',
                    'art_style',
                    'birthplace',
                ]
            }]
        })
        
        // Send data to handlebars
        res.render('product-page', {
            painting,
            loggedIn: req.session.loggedIn
        })

    } catch (error) {
        console.log(error)
    }
    
})

// Add to cart
router.get('/add-to-cart/:id', isAuthenticated, async (req, res, next) => {
    // Constructs a new cart, passing in the previous cart's items
    const cart = new Cart(req.session.cart ? req.session.cart : {})

    try {
        // Get painting data
        const painting = await ArtPiece.findByPk(req.params.id, {
            raw:true
        });

        // Use the add function from the constructor function
        cart.add(painting, painting.id);
        // Adds the updated cart to session
        req.session.cart = cart;

        console.log("Cart object when adding item to cart: "+JSON.stringify(cart))
        // Go back home
        res.redirect('/')

    } catch (error) {
        console.log(error)
    }
})

// Remove item from cart
router.get('/remove-item/:id', (req, res, next) => {

    // Create new cart with items from old cart
    const cart = new Cart(req.session.cart)

    // Use constructor function to remove the item
    cart.removeOne(req.params.id)
    // Update the cart
    req.session.cart = cart;
    // Redirect back to the cart screen
    res.redirect('/cart')

})

// Cart Page Route

router.get('/cart', isAuthenticated, (req, res, next) => {
    // If there's nothing in the cart, render without sending any data
    // HBS will recognise this and show accordingly
    if(!req.session.cart) {
        return res.render('cart')
    }

    // Create new cart, passing the old cart
    const cart = new Cart(req.session.cart);

    // Send the cart properties to handlebars
    res.render('cart', {
        items: cart.toArray(),
        totalQuantity: cart.totalQuantity,
        totalPrice: cart.totalPrice
    })

    console.log('Cart total price when rendering cart: ' + cart.totalPrice)
    
})

// Register page route
router.get('/register', (req, res, next) => {
    // If logged in, send them home
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Render the register view
    res.render('register');
});


// Render login view
router.get('/login', (req, res, next) => {
    res.render('login')
})

// Render checkout view
router.get('/checkout', isAuthenticated, (req, res, next) => {
    res.render('checkout-page')
})

// Render about page view
router.get('/about', (req, res, next) => {
    res.render('about')
})

// Render order confirmed view
router.get('/confirmed', (req, res, next) => {
    res.render('thank-you')
})

// PLAN

// Get past orders

router.get('/orders', isAuthenticated, async (req, res, next) => {
    const userId = req.session.userId

    try {
        const pastOrderData = await Order.findAll({
            where: {
                user_id : userId
            },
            raw: true
        })


        const orders = pastOrderData.map(order => {
            return {
                totalPrice: order.total_price,
                orderItems: JSON.parse(order.order_items),
                date: formatDate(order.createdAt)
            }         
        })

        res.render('orders', {
            orders
        })

    } catch (error) {
        console.log(error)
    }

})

// Get all orders where PK is equal to the session log in
// Maybe store the entire cart in the db rather than the items
// Render the orders




module.exports = router

