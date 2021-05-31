const router = require('express').Router();
const controllers = require('../controllers');

router.route('/')
    .get(controllers.getFirstRoute)

router.route('/auth/registerUser')
    .post(controllers.registerUser);

router.route('/auth/loginUser')
    .post(controllers.loginUser);

router.route('/auth/user')
    .post(controllers.getOneUser)

router.route('/auth/token')
    .post(controllers.getUserWithToken)
//router.route('/auth/getUser')
    
    
module.exports = router