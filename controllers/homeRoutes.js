// PLAN
const router = require('express').Router()
const { Artist, ArtPiece, Cart } = require("../models");
const isAuthenticated = require('../utils/isAuthenticated');


// Get all products for the home page
// TODO: Get all paintings where sold: false
router.get('/', async (req, res, next) => {

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
    // products -> find all
    // render them

// get one product by id

router.get('/painting/:id', async (req, res, next) => {
    try {
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
        

        console.log(painting)

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
    const cart = new Cart(req.session.cart ? req.session.cart : {})

    try {
        const painting = await ArtPiece.findByPk(req.params.id, {
            raw:true
        });

        cart.add(painting, painting.id);
        req.session.cart = cart;

        res.redirect('/')

    } catch (error) {
        
    }
})

router.get('/remove-item/:id', (req, res, next) => {

    const cart = new Cart(req.session.cart)

    cart.removeOne(req.params.id)
    req.session.cart = cart;

    res.redirect('/cart')

})

// Cart Page Route

router.get('/cart', isAuthenticated, (req, res, next) => {

    if(!req.session.cart) {
        return res.render('cart')
    }
    const cart = new Cart(req.session.cart);


    res.render('cart', {
        items: cart.toArray(),
        totalQuantity: cart.totalQuantity,
        totalPrice: cart.totalPrice
    })
    
})

// Register page route
router.get('/register', (req, res, next) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('register');
});



router.get('/login', (req, res, next) => {
    res.render('login')
})

router.get('/checkout', isAuthenticated, (req, res, next) => {
    res.render('checkout-page')
})

router.get('/about', (req, res, next) => {
    res.render('about')
})

router.get('/confirmed', (req, res, next) => {
    res.render('thank-you')
})

module.exports = router

