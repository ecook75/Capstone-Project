const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
Controllers.initialController.storeComments()

router.get('/', (req, res) => {
Controllers.commentController.getComments(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
Controllers.commentController.createComment(req.body,
res)
})

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:commentId', (req, res) => {
Controllers.commentController.updateComment(req, res)
})

// matches DELETE requests to /api/users/123 (123 in id param)
router.delete('/:commentId', (req, res) => {
Controllers.commentController.deleteComment(req, res)
})


module.exports = router;