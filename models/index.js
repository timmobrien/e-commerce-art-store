const User = require('./User');
const Artist = require('./Artist');
const ArtPiece = require('./ArtPiece');
const { Cart } = require('./Cart');



Artist.hasMany(ArtPiece, {
    foreignKey: 'artist',
  });

User.hasMany(ArtPiece, {
    foreignKey: 'gallery_id',
  });

  module.exports = {User, Artist, ArtPiece, Cart};