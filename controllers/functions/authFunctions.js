const User = require("../../database/models").User;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

module.exports = {
  getFirstRoute: async (req, res) => {
    res.send("hello");
  },
  registerUser: async (req, res) => {
    let user = req.body;
    let email = user.email;
    User.findOne({ email }).then(async (response) => {
      if (response !== null) {
        res.json({ serverMsg: "This email is already in our records" });
      } else if (response === null) {
        let salt = await bcrypt.genSalt(10);
        let userPassword = user.password;
        let password = await bcrypt.hash(userPassword, salt);
        user.password = password;
        let hashedUser = new User(user);
        hashedUser.save().then((response) => {
          res.json(response);
        });
      }
    });
  },
  loginUser: (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email }).then((response) => {
      if (response === null) {
        res.json({ serverMsg: "That email is not on our database" });
      } else {
        let dbPassword = response.password;
        let email = response.email;
        bcrypt.compare(password, dbPassword, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            if (data) {
              res.json({ email });
            } else {
              res.json({ serverMsg: "The passwords do not match" });
            }
          }
        });
      }
    });
  },
  getOneUserByEmail: (req, res) => {
    let email = req.body.email;
    User.findOne({ email: email }).then((user) =>
      jwt.sign({ user }, jwtSecret, (err, token) => {
        if (err) {
          console.log(err);
          res.sendStatus(403);
        } else {
          res.json({ token });
        }
      })
    );
  },
  getUserWithToken: (req, res) => {
    let token = req.body.token;
    jwt.verify(token, jwtSecret, (err, data) => {
      if (err) {
        console.log("ERR ", err);
        res.sendStatus(403);
      } else {
        res.json(data);
      }
    });
  },
};
