const express = require('express')
const passport = require("passport")

const AuthController = require('../controllers/auth')

const router = express.Router()

router.post("/signup", AuthController.createUser)
router.post("/login", passport.authenticate('local'), AuthController.login)
router.get("/me", AuthController.afterLogin) //para la persistencia de usuario
router.post("/logout", AuthController.logout)

module.exports = router
