const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const RunningMethods = require("./runningMethod");

class User extends Model { }
// Sequelize will create this table if it doesn't exist on startup
User.init({
id: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
runnerId: {
        type: DataTypes.INTEGER, allowNull: false, required: true,
        references: {
            model: RunningMethods, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
    },
firstName: {
type: DataTypes.STRING, allowNull: false
},
lastName: {
type: DataTypes.STRING, allowNull: false
},
emailId: {
type: DataTypes.STRING, allowNull: false, unique: true
},
password: {
type: DataTypes.STRING, allowNull: false
}},
{
sequelize: sequelizeInstance, modelName: 'users', // use lowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = User;