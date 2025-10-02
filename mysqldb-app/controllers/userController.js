"use strict";
const bcrypt = require('bcryptjs')
const Models = require("../models");
// Function to login a user
const loginUser = (data, res) => {
    // Find the user with the given username in the User model
    Models.User.findOne({ where: { emailId: data.emailId } }).then(
        async function (user) {
            // If the user exists and the password is correct, send the user data as a response
            if (user && (await bcrypt.compare(data.password, user.password))) {

                // Send the user data and token in the response
                res.send({ result: 200, data: { user } });
            } else {
                res.send({ result: 400, data: "Invalid User" });
            }
        }
    ).catch((err) => {
        // If there is an error, handle it
        console.error(err);
        res.status(500).send({ result: 500, data: "Internal Server Error" });
    });
};
// finds all users in DB, then sends array as response
const getUsers = (res) => {
Models.User.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createUser = async (data, res) => {
    // Hash the user's password
    data.password = await bcrypt.hash(data.password, 10);
Models.User.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}




// uses JSON from request body to update user ID from params
const updateUser = (req, res) => {
Models.User.update(req.body, { where: { id: req.params.id },
returning: true })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
// deletes user matching ID from params
const deleteUser = (req, res) => {
Models.User.destroy({ where: { id: req.params.id } })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
module.exports = {
getUsers, createUser, updateUser, deleteUser, loginUser
};
// ++ Test updating and deleting a user using Postman