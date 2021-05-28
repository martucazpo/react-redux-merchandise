const User = require("../../database/models").User;
const bcrypt = require("bcryptjs");

module.exports = {
  getFirstRoute: async (req, res) => {
    res.send("hello");
  },
  registerUser: async (req, res) => {
    let user = req.body
    let salt = await bcrypt.genSalt(10);
    let userPassword = user.password;
    let password = await bcrypt.hash(userPassword, salt);
    user.password = password;
    let hashedUser = new User(user);
    hashedUser.save().then((response) => {
      console.log(response);
      res.send("success");
    });
  },
  loginUser: (req, res) => {
    let email = "test@mail.com";
    let password = "testPassword";
    User.findOne({ email }).then((response) => {
      let dbPassword = response.password;
      bcrypt.compare(password, dbPassword, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (data) {
            console.log("login success ", data);
            res.sendStatus(200);
          } else {
            console.log("passwords do not match");
            res.sendStatus(401);
          }
        }
      });
    });
  },
  getOneUserByEmail: (req, res) => {
    let email = req.body.email;
    User.findOne({ email: email }).then( user => res.json(user))
  },
  getUsers: (req, res) => {
      User.find().then( response => {
          res.json(response)
      })
  }
};
