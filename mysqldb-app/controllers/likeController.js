"use strict";
const Models = require("../models");
// finds all posts in DB, then sends array as response
const getLikes = (res) => {
Models.Like.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createLike = (data, res) => {
Models.Like.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

module.exports = {
getLikes, createLike
}

// uses JSON from request body to update user ID from params
const updateLike = (req, res) => {
Models.Like.update(req.body, { where: { likeId: req.params.likeId },
returning: true })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
// deletes user matching ID from params
const deleteLike = (req, res) => {
Models.Like.destroy({ where: { likeId: req.params.likeId } })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
module.exports = {
getLikes, createLike, updateLike, deleteLike
};
// ++ Test updating and deleting a user using Postman