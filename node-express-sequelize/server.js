var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to
    a GET request with all users in the database */
// handler to handle api request

    app.get('/users', function (req, res) {
      // respond to client with all user table data
      // get all user data from db
      // [{}]
      User.findAll()
        .then((err, data) => {
          // send a response
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(404).send(err);
        })
    });

module.exports = {
  app: app,
  User: User
};
