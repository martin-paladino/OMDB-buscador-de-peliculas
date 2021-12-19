const axios = require('axios')
const { Favorite, User } = require('../models')
const apiUrl = require('../config/omdbApi')

class FavoritesController {

    static addToFavorites(req, res) {
        axios.get(`${apiUrl}&i=${req.params.movieId}`)
            .then(res => {
                return Favorite.create({
                    Title: res.data.Title,
                    Year: res.data.Year,
                    Rated: res.data.Rated,
                    Released: res.data.Released,
                    Runtime: res.data.Runtime,
                    Genre: res.data.Genre,
                    Director: res.data.Director,
                    Actors: res.data.Actors,
                    Poster: res.data.Poster,
                    imdbRating: res.data.imdbRating,
                    imdbID: res.data.imdbID
                })
            })
            .then(newFavorite => {
                //console.log(newFavorite.__proto__)
                return {
                    userPromise: User.findOne({ where: { id: req.params.userId } }),
                    newFavorite
                }
            })
            .then(({ userPromise, newFavorite }) => {
               userPromise.then(user => {
                    res.status(201).send(newFavorite)
                    newFavorite.addUser(user)
                })
            })
            .catch(err => console.log({ err }))
    }

    static getFavorites(req, res) {
        User.findOne({where: { id: req.params.userId }})
        .then(user => user.getFavorites())
        .then(favorites => res.status(200).send(favorites))
        .catch(err => console.log({err}))
    }

    static removeFavorite(req, res) {
        Favorite.destroy({ where: { imdbID: req.params.movieId } })
            .then(() => {
                res.sendStatus(202)})
            .catch(err => console.log(err))
    }
}

module.exports = FavoritesController