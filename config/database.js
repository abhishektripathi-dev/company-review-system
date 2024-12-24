const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('small-project', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;