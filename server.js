
const path = require('node:path')
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');

const sequelize = require('./config/connection');
const isAuthenticated = require('./utils/isAuthenticated');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// add connect session sequelize




const app = express();

const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret storage',
  cookie: { maxAge: 180 * 60 * 1000 },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess))

app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
})


app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
// Add function so that we can access login status & cart wherever
