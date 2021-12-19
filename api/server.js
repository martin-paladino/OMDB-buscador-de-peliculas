const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const sessions = require('express-session')
const passport = require('passport')

const db = require('./config/db')
const {Favorite, User} = require('./models')

const routes = require('./routes')
const omdbLocalStrategy = require('./config/localStrategy')

const app = express()

app.use(morgan('tiny'))
app.use(express.json())

app.use(cookieParser())
app.use(sessions({ secret: "omdb" }))

app.use(passport.initialize())
app.use(passport.session())

passport.use(omdbLocalStrategy)

passport.serializeUser(function(user, done) {
    done(null, user.id)
})
passport.deserializeUser(function(id, done) {
    User.findByPk(id)
    .then(user => done(null, user))
    .catch(done)
})

app.use("/api", routes)

app.use((err, req, res, next) => { //middleware de error
    if(err === "Nombre de usuario incorrecto" || "Contraseña incorrecta") return res.sendStatus(401)
})

db.sync({ force: false })
    .then(() => {
        console.log("db sincronizada")
        app.listen(3001, () => console.log("Server running on port 3001"))
    })
    .catch(err => console.log(err))
