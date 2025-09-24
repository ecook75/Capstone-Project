"use strict";
const Models = require("../models");
// finds all posts in DB, then sends array as response


const getrunningMethods = (res) => {
Models.RunningMethod.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createrunningMethod = (data, res) => {
    console.log(data)
Models.RunningMethod.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}


// uses JSON from request body to update user ID from params
const updaterunningMethod = (req, res) => {
Models.RunningMethod.update(req.body, { where: { id: req.params.id },
returning: true })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
// deletes user matching ID from params
const deleterunningMethod = (req, res) => {
Models.RunningMethod.destroy({ where: { id: req.params.id } })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
module.exports = {
getrunningMethods, createrunningMethod, updaterunningMethod, deleterunningMethod
};
// ++ Test updating and deleting a user using Postman

