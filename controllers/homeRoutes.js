// PLAN
const router = require('express').Router()
const { raw } = require('express');
const { Artist, ArtPiece, Cart } = require("../models");


// Get all products for the home page
// TODO: Get all paintings where sold: false
router.get('/', async (req, res, next) => {
    try {

        console.log("LOGGED IN: "+req.session.loggedIn)

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
        //TODO: res.render('homepage') etc. etc.
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

router.get('/add-to-cart/:id', async (req, res, next) => {
    const cart = new Cart(req.session.cart ? req.session.cart : {})

    try {
        const painting = await ArtPiece.findByPk(req.params.id, {
            raw:true
        });

        cart.add(painting, painting.id);
        req.session.cart = cart;
        console.log(req.session.cart)
        res.redirect('/')

    } catch (error) {
        
    }

    // ArtPiece.findByPk(paintingId, function (err, painting) {
    //     console.log('hey')
    //     if (err) {
    //         console.log('hey there was an error');
    //         // TODO: add some error messaging
    //     }
    //     console.log('hello')
    //     cart.add(painting, painting.id);
    //     req.session.cart = cart;
    //     console.log(req.session.cart)
    //     res.redirect('/')
    // })
    // console.log(req.session.cart)
})

// Register page route
router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login')
})

module.exports = router

// TODO: Route to view cart