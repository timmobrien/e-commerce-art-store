const seedArtists = require('./artist-seeds');
const seedArtworks = require('./artworks-seeds');
const seedUserdata = require('./userdata-seeds');

const sequelize = require('../config/connection');




const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedArtists();
  console.log('\n----- ARTISTS SEEDED -----\n');
  await seedArtworks();
  console.log('\n----- ARTWORKS SEEDED -----\n');
  await seedUserdata();
  console.log('\n----- USERDATA SEEDED -----\n');


  process.exit(0);
};

seedAll();
