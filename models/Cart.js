class Cart {
    constructor(oldCart) {
        // Grabs all items from the old cart & assign their values
        // If there was nothing in the old cart, assign an empty object with no qty/prices
        this.items = oldCart.items || {};
        this.totalQuantity = oldCart.totalQuantity || 0;
        this.totalPrice = oldCart.totalPrice || 0;

        console.log("Total price when initialising cart: " + this.totalPrice)

        // Add a new item to the cart
        this.add = function (item, id) {
            // The key of each item is their ID
            var storedItem = this.items[id];
            // Check if an item with that key is already in the cart
            if (!storedItem) {
                // If it's not in the cart, create it under a new key
                storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
            }
            // Once we know the item is in the items object
            // Increase the qty by 1
            storedItem.qty++;
            // Set the price to qty * price
            storedItem.price = storedItem.item.price * storedItem.qty;
            console.log("stored Item price: " , storedItem.item.price)
            console.log("stored Item qty: " , storedItem.qty)
            console.log("multiplication function but console logged " , storedItem.item.price*storedItem.qty)
            console.log("adding total price but in console log " , totalPrice += storedItem.item.price)



            // Increase the total qty of cart contents
            this.totalQuantity++;
            // Add the price of the item added to the total price
            this.totalPrice += storedItem.item.price;

            console.log("total price after adding item: "+this.totalPrice)
        };

        this.removeOne = function (id) {
            // Reduces the qty of the item by 1
            this.items[id].qty--;
            // Reduce the price of the cart entry by the item's price
            this.items[id].price -= this.items[id].item.price;
            // Reduce total qty by 1
            this.totalQuantity--;
            // Reduce total price by item price
            this.totalPrice -= this.items[id].item.price;
            // If the quantity of the item is 0 or less, delete it from the cart completely
            if(this.items[id].qty <= 0) {
                delete this.items[id];
            }
        }

        // Creates the cart object as an array
        this.toArray = function () {
            return Object.values(this.items);
        };


    }
}

module.exports = {Cart}