const { Sequelize } = require('sequelize');

const database_dev = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.dev.sqlite',
  logging: (...msg: string[]) => console.log(msg), // Log all function call parameters.
});

export default database_dev;
