const axios = require('axios')
const apiUrl = require('../config/omdbApi')

class MoviesController {
    
    static searchMovies(req, res) {
        axios.get(`${apiUrl}&s=${req.params.search}`)
        .then(res => res.data)
        .then(movies => res.status(200).send(movies))
        .catch(err => console.log(err))
    }

    static getMovie(req, res) {
        axios.get(`${apiUrl}&i=${req.params.id}`)
        .then(res => res.data)
        .then(movie => res.status(200).send(movie))
        .catch(err => console.log(err))
    }
}

module.exports = MoviesController