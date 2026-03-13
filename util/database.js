const Sequelize = require('sequelize');

const sequelize = new Sequelize('tradeify', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
