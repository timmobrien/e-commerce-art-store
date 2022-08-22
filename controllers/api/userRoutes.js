const router = require('express').Router()

const { User } = require('../../models/')
// PLAN

// Post request for new user
router.post('/user/', async (req, res, next) => {
    try {

        
        // Create the user in the db
        const dbUserData = await User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            email: req.body.email,
            address: req.body.address
        })

        
        
        // In session storage, log them in
        req.session.save(() => {
            req.session.loggedIn = true,
    
            res.status(200).json(dbUserData)
        })
        
    } catch (err) {
        // set up error handling later
        console.log(err)
        console.log('REQUEST: ' + req)
        res.status(500).json(err)
    }
})


// Post request for login

router.post('/user/login', async (req, res, next) => {
    try {
        // See if the user in the db
        console.log(req.body)


        const dbUserData = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        console.log('DBUSERDATA'+dbUserData)
        
        if(!dbUserData) {
            res
              .status(400)
              .json({
                message: "Incorrect email or password, please try again"
              })
            return;
        }
        
        // If they are, check their password with the checkPassword()
        const validPassword = dbUserData.checkPassword(req.body.password)

        // If password is incorrect, tell them
        if(!validPassword) {
            res
              .status(400)
              .json({
                message: "Incorrect email or password, please try again"
              })
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true

            res
              .status(200)
              .json({user: dbUserData, message: "Log in successful"})
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
        // Check password function is defined in the model, it encrypts the submission and then returns whether they are the same
    // If password is correct, save in sessionStorage as logged in

// To logout
router.post('/user/logout', (req, res, next) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
});
    // Destroy the session
    // Decide if i want to destroy the cart too (probably since we arent saving carts in db)

module.exports = router
