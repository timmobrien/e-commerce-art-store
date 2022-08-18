// PLAN
const router = require('express').Router()
const { Artist, ArtPiece, Cart } = require("../models");


// Get all products for the home page
// TODO: Get all paintings where sold: false
router.get('/', async (req, res, next) => {
    try {
        const dbPaintingsData = await ArtPiece.findAll({
            include:[{
                model: Artist,
                attributes: ['name', 'art_style']
            }]
        })

        const paintings = dbPaintingsData.map((painting)=> {
            paintings.get({plain: true})
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
        const dbPaintingData = await ArtPiece.findByPk(req.params.id, {
            include:[{
                model: Artist,
                attributes: [
                    'name',
                    'art_style',
                    'birthplace',
                    'age'
                ]
            }]
        })
        
        const painting = dbPaintingData.get({
            plain: true
        })

        // TODO: render the painting
    } catch (error) {
        console.log(error)
    }
    
})

// Add to cart

router.get('/add-to-cart/:id', async (req, res, next) => {
    const paintingId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {})

    ArtPiece.findByPk(paintingId, function (err, painting) {
        if (err) {
            return;
            // TODO: add some error messaging
        }
        cart.add(painting, painting.id);
        req.session.cart = cart;
        console.log(req.session.cart)
        res.redirect('/')
    })
})

// TODO: Route to view cart