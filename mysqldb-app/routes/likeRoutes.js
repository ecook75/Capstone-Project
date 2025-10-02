const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
Controllers.initialController.storeLikes()

router.get('/', (req, res) => {
Controllers.likeController.getLikes(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
Controllers.likeController.createLike(req.body,
res)
})

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:likeId', (req, res) => {
Controllers.likeController.updateLike(req, res)
})

// matches DELETE requests to /api/users/123 (123 in id param)
router.delete('/:likeId', (req, res) => {
Controllers.likeController.deleteLike(req, res)
})


module.exports = router;