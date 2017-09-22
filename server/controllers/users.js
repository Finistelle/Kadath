const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                googleId: req.body.googleId,
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    },
};