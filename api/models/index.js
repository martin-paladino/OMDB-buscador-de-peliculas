const Favorite = require('./Favorite')
const User = require('./User')

User.belongsToMany(Favorite, {through: "UsersFavorites"})
Favorite.belongsToMany(User, {through: "UsersFavorites"})

module.exports = { Favorite, User }