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
            address: req.body.address,
            
        })

        // Get the user data in plain format
        const user = dbUserData.get({plain: true})

        // In session storage, save their login status and the user ID
        req.session.save(() => {
            req.session.loggedIn = true,
            req.session.userId = user.id
            res.status(200).json(dbUserData)
        })
        
    } catch (err) {
        // set up error handling later
        console.log(err)
        res.status(500).json(err)
    }
})


// Post request for login

router.post('/user/login', async (req, res, next) => {
    try {

        // See if user is in the DB by their email
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email
            }
        })

        // If they're not in the DB, send a bad response
        if(!dbUserData) {
            res
            .status(400)
            .json({
                message: "Incorrect email or password, please try again"
            })
            return;
        }
        
        // Once we've confirmed they're in the DB, get their data in plain form
        const user = dbUserData.get({plain: true})
        // Check their password with the checkPassword() function from the model
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

        // If password is correct, set their login status and save the userID to the session
        req.session.save(() => {
            req.session.loggedIn = true
            req.session.userId = user.id
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
    // Destroy the session storage
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
});

module.exports = router
