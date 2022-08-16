const { Artist } = require('../models');

const artistData = [
  {
    name: 'Adriaen van de Venne',
    birthplace: 'Netherlands'
  },
  {
    name: 'Claude-Joseph Vernet',
    birthplace: 'France'
  },
  {
    name: 'Pietro Paolini',
    birthplace: 'Italy'
  },
  {
    name: 'Hans Hoffmann',
    birthplace: 'Germany'
  },
  {
    name: 'Hubert Robert',
    birthplace: 'France'
  },
  {
    name: 'Peter Paul Rubens',
    birthplace: 'Belgium'
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
