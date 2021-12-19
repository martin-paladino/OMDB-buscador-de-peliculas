const express = require('express')

const MoviesController = require('../controllers/movies')

const router = express.Router()

router.get("/:search", MoviesController.searchMovies)
router.get("/get/:id", MoviesController.getMovie)


module.exports = router