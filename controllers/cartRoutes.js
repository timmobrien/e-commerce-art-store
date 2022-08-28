const { Cart, ArtPiece } = require("../models");

const isAuthenticated = require("../utils/isAuthenticated");
const router = require('express').Router()


router.get("/add-to-cart/:id", isAuthenticated, async (req, res, next) => {
    // Constructs a new cart, passing in the previous cart's items
    const cart = new Cart(req.session.cart ? req.session.cart : {});
  
    try {
      // Get painting data
      const painting = await ArtPiece.findByPk(req.params.id, {
        raw: true,
      });
  
      // Use the add function from the constructor function
      cart.add(painting, painting.id);
      // Adds the updated cart to session
      req.session.cart = cart;
  
      // Go back home
      res.redirect("/");
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
});

// Remove item from cart
router.get("/remove-item/:id", (req, res, next) => {
    // Create new cart with items from old cart
    const cart = new Cart(req.session.cart);
  
    // Use constructor function to remove the item
    cart.removeOne(req.params.id);
    // Update the cart
    req.session.cart = cart;
    // Redirect back to the cart screen
    res.redirect("/cart");
});

// Cart Page Route

router.get("/cart", isAuthenticated, (req, res, next) => {
    try {
      // If there's nothing in the cart, render without sending any data
      // HBS will recognise this and show accordingly
      if (!req.session.cart) {
        return res.render("cart");
      }
  
      // Create new cart, passing the old cart
      const cart = new Cart(req.session.cart);
  
      // Send the cart properties to handlebars
      res.render("cart", {
        items: cart.toArray(),
        totalQuantity: cart.totalQuantity,
        totalPrice: cart.totalPrice,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
});

module.exports = router;


