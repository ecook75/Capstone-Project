const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Users = require("./user");

class Post extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Post.init({
postId: {
type: DataTypes.INTEGER, allowNull: false, autoIncrement:
true, primaryKey: true
},
runnerId: {
type: DataTypes.INTEGER, allowNull: false,
references: {
            model: Users, //reference to another model
            key: "id", //column name of the referenced model
            indexes: [{ unique: true }],
        }
},
content: {
type: DataTypes.TEXT, allowNull: false
}
},
{
sequelize: sequelizeInstance, modelName: 'posts', // use lowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = Post;