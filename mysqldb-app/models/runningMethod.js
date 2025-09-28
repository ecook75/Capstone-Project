const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
//const Users = require("./user");

class RunningMethod extends Model { }
// Sequelize will create this table if it doesn't exist on startup
RunningMethod.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
title: {
type: DataTypes.STRING, allowNull: false
},
description: {
type: DataTypes.TEXT, allowNull: false
},
origin: {
type: DataTypes.TEXT, allowNull: false
},
fitness_level: {
type: DataTypes.TEXT, allowNull: false
}},
{
sequelize: sequelizeInstance, modelName: 'runningmethods', // use lowercase plural format
timestamps: true, freezeTableName: true
}
),

module.exports = RunningMethod;