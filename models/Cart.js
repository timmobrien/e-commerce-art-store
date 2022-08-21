function Cart(oldCart) {
    // Grabs all items from the old cart & assign their values
    // If there was nothing in the old cart, assign an empty object with no qty/prices
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    // Add a new item to the cart
    this.add = function(item, id) {
        // The key of each item is their ID
        var storedItem = this.items[id]
        // Check if an item with that key is already in the cart
        if (!storedItem) {
            // If it's not in the cart, create it under a new key
            storedItem = this.items[id] = {item: item, qty: 0, price: 0}
        }
        // Once we know the item is in the items object
        // Increase the qty by 1
        storedItem.qty++;
        // Set the price to qty * price
        storedItem.price = storedItem.item.price * storedItem.qty
        // Increase the total qty of cart contents
        this.totalQuantity++;
        // Add the price of the item added to the total price
        this.totalPrice += storedItem.item.price
    }

    this.toArray = function() {
        return Object.values(this.items)

    }


}

module.exports = {Cart}