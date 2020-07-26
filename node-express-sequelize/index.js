var app = require('./server').app;
var User = require('./server').User;
var port = 3000;
app.use('/users', router);

// es6 object destructure?
User.sync({ force: true })
  .then(function () {
    console.log('Users table created');
    // Create a '/users' route that responds to a GET request
    // respond to get request
    app.get('/users', function (req, res) {
      res.send('USER')
    });
    // call the user.create function
    return User.create({ username: 'zlester' });
  })
  .then(function() {
    console.log('Seeded User table');
    // use User, a model (where db is stored) to send all
    var resultQuery = User.query("SELECT * FROM users");
    app.listen(port, function() {
      console.log('node-express-sequelize listening on ' + port);
    });
    return resultQuery;
  });

// Uses the provided Sequelize `User` model to send all `users` currently in the database