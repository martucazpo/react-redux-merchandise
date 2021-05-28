const router = require('express').Router();
const controllers = require('../controllers');

router.route('/')
    .get(controllers.getFirstRoute)

router.route('/auth/registerUser')
    .post(controllers.registerUser);

router.route('/auth/loginUser')
    .post(controllers.loginUser);

router.route('/auth/user')
    .get(controllers.getUsers)
    .post(controllers.getOneUser)
    
module.exports = router