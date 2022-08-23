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
  {
    name: 'Vittorio Natoli',
    birthplace: 'Australia',
    art_style: 'Photography',
  },
  {
    name: 'Ansel Adams',
    birthplace: 'America',
    art_style: 'Photography',
  },
  {
    name: 'Dorothea Lange',
    birthplace: 'America',
    art_style: 'Photography',
  },
  {
    name: 'Robert Capa',
    birthplace: 'Hungary',
    art_style: 'Photography',
  },
  {
    name: 'Robert Frank',
    birthplace: 'Switzerland',
    art_style: 'Photography',
  },
  {
    name: 'David Bailey',
    birthplace: 'United Kingdom',
    art_style: 'Photography',
  },
  {
    name: 'Andreas Gursky',
    birthplace: 'Garmany',
    art_style: 'Photography',
  },
  {
    name: 'Hiroshi Sugimoto',
    birthplace: 'Japan',
    art_style: 'Photography',
  },
  {
    name: 'Kiki Smith',
    birthplace: 'Germany',
    art_style: 'Photography',
  },
  {
    name: 'Massimo Vitali',
    birthplace: 'Italy',
    art_style: 'Photography',
  },

];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
