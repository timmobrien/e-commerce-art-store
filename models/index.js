const User = require('./User');
const Artist = require('./Artist');
const ArtPiece = require('./ArtPiece');
const { Cart } = require('./Cart');
const Order = require('./Order');


ArtPiece.belongsTo(Artist, {
    foreignKey: 'artist_id',
});

User.hasMany(Order, {
    foreignKey:'user_id'
})

User.hasMany(ArtPiece, {
    foreignKey: 'gallery_id',
});

module.exports = {User, Artist, ArtPiece, Cart, Order};