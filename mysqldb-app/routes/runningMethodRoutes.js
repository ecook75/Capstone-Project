const express = require("express");

const router = express.Router();

const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
//Controllers.initialController.storeRunningData()


router.get('/', (req, res) => {
Controllers.runningMethodController.getrunningMethods(res);
})

// matches POST requests sent to /api/users/create
router.post('/create', (req, res) => {
Controllers.runningMethodController.createrunningMethod(req.body,
res)
})

// matches PUT requests to /api/users/123 (stores 123 in id param)
router.put('/:id', (req, res) => {
Controllers.runningMethodController.updaterunningMethod(req, res)
})

// matches DELETE requests to /api/users/123 (123 in id param)
router.delete('/:id', (req, res) => {
Controllers.runningMethodController.deleterunningMethod(req, res)
})


module.exports = router;