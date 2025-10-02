"use strict";
const Models = require("../models");
// finds all posts in DB, then sends array as response
const getPosts = (res) => {
Models.Post.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createPost = (data, res) => {
Models.Post.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

module.exports = {
getPosts, createPost
}

// uses JSON from request body to update user ID from params
const updatePost = (req, res) => {
Models.Post.update(req.body, { where: { postId: req.params.postId },
returning: true })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
// deletes user matching ID from params
const deletePost = (req, res) => {
Models.Post.destroy({ where: { postId: req.params.postId } })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
module.exports = {
getPosts, createPost, updatePost, deletePost
};
// ++ Test updating and deleting a user using Postman