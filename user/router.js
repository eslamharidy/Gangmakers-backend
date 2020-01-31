const { Router } = require("express");
const User = require("./model");
const router = new Router();
const bcryptjs = require("bcryptjs");

//add user
router.post("/user", (req, res, next) => {
  const user = {
    name: req.body.name,
    city: req.body.city,
    age: req.body.age,
    email: req.body.email,
    password: bcryptjs.hashSync(req.body.password, 10)
  };
  User.create(user)
    .then(logins => res.send(logins))
    .catch(next);
});

//get all users
router.get("/user", (req, res, next) => {
  const limit = req.query.limit || 10; //limits can be used in future for pagination
  const offset = 0;

  User.findAndCountAll({ limit: limit, offset: offset })
    .then(result => res.send({ users: result.rows, total: result.count }))
    .catch(error => next(error));
});

module.exports = router;
