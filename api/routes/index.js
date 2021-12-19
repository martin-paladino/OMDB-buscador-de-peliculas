const express = require('express')

const users = require('./users')
const favorites = require('./favorites')
const movies = require('./movies')
const auth = require('./auth')

const router = express.Router()

router.use('/users', users)
router.use('/favorites', favorites)
router.use('/movies', movies)
router.use('/auth', auth)

module.exports = router