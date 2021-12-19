const S = require('sequelize')
const db = require('../config/db')

class Favorite extends S.Model { }

Favorite.init({
    Title: {
        type: S.STRING,
        allowNull: false
    },
    Year: {
        type: S.STRING,
        allowNull: false
    },
    Rated: {
        type: S.STRING,
        allowNull: false
    },
    Released: {
        type: S.STRING,
        allowNull: false
    },
    Runtime: {
        type:S.STRING,
        allowNull: false
    },
    Genre: {
        type: S.STRING,
        allowNull: false
    },
    Director: {
        type: S.STRING,
        allowNull: false
    },
    Actors: {
        type: S.STRING,
        allowNull: false
    },
    Poster: {
        type: S.STRING,
        allowNull: false
    },
    imdbRating: {
        type: S.DECIMAL(10, 2),
        allowNull: false
    },
    imdbID: {
        type: S.STRING,
        allowNull: false
    }
},
    {
        sequelize: db,
        modelName: "favorite"
    })

module.exports = Favorite