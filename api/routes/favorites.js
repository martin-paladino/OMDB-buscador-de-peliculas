const express = require('express')

const FavoritesController = require('../controllers/favorites')

const router = express.Router()

router.post("/add/:movieId/:userId", FavoritesController.addToFavorites)
router.get("/:userId", FavoritesController.getFavorites)
router.delete("/:movieId", FavoritesController.removeFavorite)

module.exports = router