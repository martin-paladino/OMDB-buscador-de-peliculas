const { User } = require('../models')

class UsersController {

    static findAllUsers(req, res) {
        User.findAll()
            .then(users => res.status(200).send(users))
            .catch(err => console.log(err))
    }

    static searchUsers(req, res) {
        User.findAll({
            where: {
                name: req.params.name,
                lastName: req.params.lastName
            }
        })
            .then(users => res.status(200).send(users))
            .catch(err => console.log(err))
    }

    static getUser(req, res) {
        User.findOne({ where: { id: req.params.id } })
            .then(user => res.status(200).send(user))
            .catch(err => console.log(err))
    }

}

module.exports = UsersController