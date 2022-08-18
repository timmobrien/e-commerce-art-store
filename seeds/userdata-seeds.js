const { User } = require('../models');

const userData = [
  {
    first_name: "Dorothy",
    last_name: "Janis",
    email: "DorothyJanis@mailinator.com",
    address: "3 Hillwood Avenue",
    password: ''
  },
  {
    first_name: "Yoshiko",
    last_name: "Darrelle",
    email: "YoshikoDarrelle@mailinator.com",
    address: " 1 Manchester road",
    password: ''
  },
  {
    first_name: "Celeste",
    last_name: "Karolina",
    email: "CelesteKarolina@mailinator.com",
    address: "12 Great Avenue",
    password: ''
  },
  {
    first_name: "Anet",
    last_name: "Tamera",
    email: "AnetTamera@mailinator.com",
    address: " 23 Lumb road",
    password: ''
  },
  {
    first_name: "Carri",
    last_name: "Eddi",
    email: "CarriEddi@mailinator.com",
    address: "45 Hill Grove",
    password: ''
  },
  {
    first_name: "Barbee",
    last_name: "Elsy",
    email: "BarbeeElsy@mailinator.com",
    address: "62 Russell Grove",
    password: ''
  },
];

const seedUserdata = () => User.bulkCreate(userData);

module.exports = seedUserdata;
