'use strict';
const { Sequelize } = require('sequelize');
//const Controllers = require("./controllers");

// Sequelize is a package that abstracts out the need to write
// SQL queries, relying instead on their models to do it for you
const sequelize = new Sequelize(process.env.DB_NAME,
process.env.DB_USER, process.env.DB_PASSWORD, {
host: process.env.DB_HOST,
dialect: 'mysql'
});
const connectMysql = async () => {
try {
await sequelize.authenticate();
console.log(`Successful connection to MySQL Database test
${process.env.DB_NAME}`); 
//Controllers.initialController.storeRunningData()

} catch (error) {
console.error('Unable to connect to MySQL database:',
error);
process.exit(1);
}
}
connectMysql();
module.exports = {
Sequelize: sequelize
}