const LocalStrategy = require('passport-local').Strategy
const { User } = require('../models')

const omdbLocalStrategy = new LocalStrategy({ usernameField: "email" },
(inputEmail, password, done) => {
    User.findOne({where: { email: inputEmail }})
    .then(user => {
        if(!user) return done("Nombre de usuario incorrecto", false)
        
        user.hashPassword(password, user.salt)
        .then(pass => {
            if(pass !== user.password) return done("Contraseña incorrecta", false)
            done(null, user)
        }) 
    })
    .catch(done)
})

module.exports = omdbLocalStrategy