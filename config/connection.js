require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('heroku_f13cfa179ca80c3', 'b264676882cda6', '2c697f2d', {
      host: 'us-cdbr-east-06.cleardb.net',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;