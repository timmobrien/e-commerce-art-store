
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers')

const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// add connect session sequelize




const app = express();

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create();

const session = {
    secret: 'Super secret storage',
    cookie: { maxAge: 180 * 60 * 1000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};

// Add function so that we can access login status & cart wherever
