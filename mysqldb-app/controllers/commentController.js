"use strict";
const Models = require("../models");
// finds all posts in DB, then sends array as response
const getComments = (res) => {
Models.Comment.findAll({}).then(data => {
res.send({result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}
// uses JSON from request body to create new user in DB
const createComment = (data, res) => {
Models.Comment.create(data).then(data => {
res.send({ result: 200 , data: data});
}).catch(err => {
console.log(err);
res.send({ result: 500, error: err.message });
})
}

module.exports = {
getComments, createComment
}

// uses JSON from request body to update user ID from params
const updateComment = (req, res) => {
Models.Comment.update(req.body, { where: { commentId: req.params.commentId },
returning: true })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
// deletes user matching ID from params
const deleteComment = (req, res) => {
Models.Comment.destroy({ where: { commentId: req.params.commentId } })
.then(data => {
res.send({ result: 200, data: data });
}).catch((err) => {
console.log(err);
res.send({ result: 500, error: err.message });
});
};
module.exports = {
getComments, createComment, updateComment, deleteComment
};
// ++ Test updating and deleting a user using Postman