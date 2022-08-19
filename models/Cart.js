function Cart(oldCart) {
    // Grabs all items from the old cart & assign their values
    this.items = oldCart.items || {};
    this.totalQuantity = oldCart.totalQuantity || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    // Add a new item to the cart
    this.add = function(painting, id) {
        let storedItem = this.items[id]
        // If this item isn't already in the cart, add it as a new item
        if (!storedItem) {
            console.log('new item')
            storedItem = this.items[id] = {item: painting.title, quantity: 0, price: 0}
        }
        // If we already have that item in the cart, increase the quantity and total price
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty
        this.totalQuantity++;
        this.totalPrice += storedItem.item.price
    }

    this.createItemsArray = function() {
        let arr = [];
        for (var id in this.items) {
            arr.push(this.items[id])
        }
        return arr;
    }
}

module.exports = {Cart}