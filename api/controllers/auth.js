const { User } = require('../models')

class AuthController {

    static createUser(req, res) {
        User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        .then(newUser => res.status(201).send(newUser))
        .catch(err => console.log(err))
    }

    static login(req, res) {
        res.send(req.user)
    }
    
    static afterLogin(req, res) {
        if (!req.user) return res.sendStatus(401)
        res.send(req.user)
    }

    static logout(req, res) {
        req.logout()
        res.status(200).send({})
    }
}

module.exports = AuthController