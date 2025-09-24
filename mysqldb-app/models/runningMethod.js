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
type: DataTypes.STRING, allowNull: false
},
origin: {
type: DataTypes.STRING, allowNull: false, unique: true
},
fitness_level: {
type: DataTypes.STRING, allowNull: false
}},
{
sequelize: sequelizeInstance, modelName: 'runningMethods', // use lowercase plural format
timestamps: true, freezeTableName: true
}
),

module.exports = RunningMethod;