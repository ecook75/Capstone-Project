'use strict'
const RunningMethod = require('./runningMethod');
const User = require('./user') //require the model
const Post = require('./post')
const Comment = require('./comment')
const Like = require('./like')

async function init() {
await RunningMethod.sync(); // sync the model
await User.sync(); // sync the model
await Post.sync();
await Comment.sync();
await Like.sync();


// also sync any extra models here
};

init();

// Sequelize will auto-generate foreign key column names based on the table names
// Post.belongsTo(User);
// User.hasMany(Post);


module.exports = {
User, RunningMethod, Post, Comment, Like // export the model
// also export any extra models here
};