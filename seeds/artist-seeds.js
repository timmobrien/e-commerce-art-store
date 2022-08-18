const { Artist } = require('../models');

const artistData = [
  {
    name: 'Adriaen van de Venne',
    birthplace: 'Netherlands',
    art_style: 'Oil on panel',
  },
  {
    name: 'Claude-Joseph Vernet',
    birthplace: 'France',
    art_style: 'Oil on canvas',
  },
  {
    name: 'Pietro Paolini',
    birthplace: 'Italy',
    art_style: 'Oil on canvas',
  },
  {
    name: 'Hans Hoffmann',
    birthplace: 'Germany',
    art_style: 'Oil on panel',
  },
  {
    name: 'Hubert Robert',
    birthplace: 'France',
    art_style: 'Oil on canvas',
  },
  {
    name: 'Peter Paul Rubens',
    birthplace: 'Belgium',
    art_style: 'Oil on canvas',
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
