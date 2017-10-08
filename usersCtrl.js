var userData = require('./userData.json')

module.exports = {
getUsers(req, res, next) {

var allData;
  if (req.query.age) {
      allData = userData.filter(user => user.age < req.query.age);
    }
  else if (req.query.lastname) {
      allData = userData.filter(
        user => user.last_name === req.query.lastname);
    }
 else if (req.query.email) {
      allData = userData.filter(user => user.email === req.query.email);
    }
else if (req.query.favorites) {
      allData = userData.filter(user => user.favorites.includes(req.query.favorites));
    }
else {
      allData = userData;
    }
    res.json(allData);
   },

  getUser(req, res, next) {
var user = userData.find(user => user.id == req.params.id);

    if (user) {
      res.json(user);
    }
else {
      res.status(404).json(null);
    }
  },

  getAdmin(req, res, next) {
    res.json(userData.filter(user => user.type === "admin"));
  },

  getNoAdmin(req, res, next) {
    res.json(userData.filter(user => user.type !== "admin"));
  },

  getType(req, res, next) {
    res.json(userData.filter(user => user.type === req.params.type));
  },

  putUser(req, res, next) {
    var user = userData.findIndex(user => user.id == req.params.id);
    userData[user] = req.body;
    res.json(userData);
  },

  postUser(req, res, next) {
    var postUser = req.body;
    postUser.id = userData[userData.length - 1].id + 1;
    userData.push(postUser);
    res.json(userData);
  },

  delUser(req, res, next) {
    var user = userData.findIndex(user => user.id == req.params.id);
    userData.splice(user, 1);
    res.json(userData);
  }

 };
