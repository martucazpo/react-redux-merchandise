const User = require("../../database/models").User;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

module.exports = {
  getFirstRoute: async (req, res) => {
    res.send("hello");
  },
  registerUser: async (req, res) => {
    let user = req.body;
    let salt = await bcrypt.genSalt(10);
    let userPassword = user.password;
    let password = await bcrypt.hash(userPassword, salt);
    user.password = password;
    let hashedUser = new User(user);
    hashedUser.save().then((response) => {
      res.json(response);
    });
  },
  loginUser: (req, res) => {
    let { email, password } = req.body
    User.findOne({ email }).then((response) => {
      let dbPassword = response.password;
      let email = response.email
      bcrypt.compare(password, dbPassword, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          if (data) {
            console.log("login success ", data);
            res.json({ email });
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
    User.findOne({ email: email }).then((user) => jwt.sign({user}, 'catsstink', (err, token)=> {
      if(err){
        console.log(err)
        res.sendStatus(403)
      }else{
        res.json({token})
      }
    }));
  },
  getUserWithToken: (req, res) => {
    let token = req.body.token;
    jwt.verify( token, 'catsstink', (err, data) => {
      if(err){
        console.log("ERR ", err)
        res.sendStatus(403)
      } else {
        res.json(data)
      }
    })
  },
};
