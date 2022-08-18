const { ArtPiece } = require('../models');


const artPieceData = [
  {
    title: 'A Ball Game Before a Country Palace',
    price: 25000.00,
    art_style: 'Oil on panel',
    date_created: 1614,
    artist_id: 1,
    is_sold: false,
    sold_to: 1,
    image: '01-A-Ball-Game-Before-a-Country-Palace.jpg',
  },
  {
    title: 'A Calm at a Mediterranean Port',
    price: 36000.00,
    art_style: 'Oil on canvas',
    date_created: 1770,
    artist_id: 2,
    is_sold: false,
    sold_to: 2,
    image: '02-A-Calm-at-a-Mediterranean-Port.jpg',
  },
  {
    title: 'Achilles among the Daughters of Lycomedes',
    price: 15000.00,
    art_style: 'Oil on canvas',
    date_created: 1630,
    artist_id: 3,
    is_sold: false,
    sold_to: 3,
    image: '03-Achilles-among-the-Daughters-of-Lycomedes.jpg',
  },
  {
    title: 'A Hare in the Forest',
    price: 6500.00,
    art_style: 'Oil on panel',
    date_created: 1585,
    artist_id: 4,
    is_sold: false,
    sold_to: 4,
    image: '04-A-Hare-in-the-Forest.jpg',
  },
  {
    title: 'A Hermit Praying in the Ruins of a Roman Temple',
    price: 3500.00,
    art_style: 'Oil on canvas',
    date_created: 1760,
    artist_id: 5,
    is_sold: false,
    sold_to: 5,
    image: '05-A-Hermit-Praying-in-the-Ruins-of-a-Roman-Temple.jpg',
  },
  {
    title: 'Andromeda',
    price: 75000.00,
    art_style: 'Oil on canvas',
    date_created: 1640,
    artist_id: 6,
    is_sold: false,
    sold_to: 6,
    image: '06-Andromeda.jpg',
  },
];

const seedArtworks = () => ArtPiece.bulkCreate(artPieceData);

module.exports = seedArtworks;
