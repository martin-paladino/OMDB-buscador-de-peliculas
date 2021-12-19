const express = require('express')

const UsersController = require('../controllers/users')

const router = express.Router()


router.get("/", UsersController.findAllUsers)
router.get("/:name/:lastName", UsersController.searchUsers)
router.get("/:id", UsersController.getUser) //para cuando le hagan un click


module.exports = router