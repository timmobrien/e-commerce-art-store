const { Artworks } = require('../models');

const artworkData = [
  {
    title: 'A Ball Game Before a Country Palace',
    price: 25000.00,
    style_of_art: 'Oil on panel',
    date_created: 1614,
    category_id: 1,
  },
  {
    title: 'A Calm at a Mediterranean Port',
    price: 36000.00,
    style_of_art: 'Oil on canvas',
    date_created: 1770,
    category_id: 5,
  },
  {
    title: 'Achilles among the Daughters of Lycomedes',
    price: 15000.00,
    style_of_art: 'Oil on canvas',
    date_created: 1630,
    category_id: 4,
  },
  {
    title: 'A Hare in the Forest',
    price: 6500.00,
    style_of_art: 'Oil on panel',
    date_created: 1585,
    category_id: 3,
  },
  {
    title: 'A Hermit Praying in the Ruins of a Roman Temple',
    price: 3500.00,
    style_of_art: 'Oil on canvas',
    date_created: 1760,
    category_id: 2,
  },
  {
    title: 'Andromeda',
    price: 75000.00,
    style_of_art: 'Oil on canvas',
    date_created: 1640,
    category_id: 2,
  },
];

const seedArtworks = () => Artworks.bulkCreate(artworkData);

module.exports = seedArtworks;
