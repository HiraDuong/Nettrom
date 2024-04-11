
const { Sequelize } = require("sequelize");
const config = require("./pgdbInfo.js");

const sequelize = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    dialect: "postgres", 
  },
);

module.exports = sequelize;