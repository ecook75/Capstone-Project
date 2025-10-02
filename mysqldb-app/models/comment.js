const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
const Users = require("./user");
const Posts = require("./post");

class Comment extends Model { }
// Sequelize will create this table if it doesn't exist on startup
Comment.init({
commentId: {
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

postId: {
type: DataTypes.INTEGER, allowNull: false,
references: {
            model: Posts,
            key: "id",
            indexes: [{unique: true}],
}
},
comment: {
type: DataTypes.TEXT, allowNull: false
}
},
{
sequelize: sequelizeInstance, modelName: 'comments', // use lowercase plural format
timestamps: true, freezeTableName: true
}
)
module.exports = Comment;