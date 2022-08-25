// Middleware to check if user is logged in
const isAuthenticated = (req, res, next) => {
    if(!req.session.loggedIn) {
        res.redirect('/login')
    } else {
        next();
    }
}

module.exports = isAuthenticated;