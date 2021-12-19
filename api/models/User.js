const S = require('sequelize')
const db = require('../config/db')
const bcrypt = require('bcrypt')

class User extends S.Model {}

User.init({
    name: {
        type: S.STRING,
        allowNull: false
    },
    lastName: {
        type: S.STRING,
        allowNull: false
    },
    email: {
        type: S.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: S.STRING,
        allowNull: false
    },
    salt: {
        type: S.STRING,
      },
    fullName: {
        type: S.VIRTUAL,
        get() {return `${this.name} ${this.lastName}`}
    },
    
},
    {
    sequelize: db,
    modelName: "user"
})

User.addHook("beforeCreate", (user) => {
    return bcrypt.genSalt(16)
    .then(salt => {
        user.salt = salt
        return user.hashPassword(user.password, user.salt)
    })
    .then(hash => user.password = hash)
})

User.prototype.hashPassword = (pass, salt) => {
    return bcrypt.hash(pass, salt)
}

module.exports = User

