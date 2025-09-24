'use strict'
const RunningMethod = require('./runningMethod');
const User = require('./user') //require the model

async function init() {
await RunningMethod.sync(); // sync the model
await User.sync(); // sync the model


// also sync any extra models here
};

init();

// Sequelize will auto-generate foreign key column names based on the table names
// Post.belongsTo(User);
// User.hasMany(Post);


module.exports = {
User, RunningMethod // export the model
// also export any extra models here
};