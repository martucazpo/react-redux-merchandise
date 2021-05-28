const router = require('express').Router();
const controllers = require('../controllers');

router.route('/')
    .get(controllers.getFirstRoute)

router.route('/auth/registerUser')
    .get(controllers.registerUser);

router.route('/auth/loginUser')
    .get(controllers.loginUser);

router.route('/auth/user')
    .get(controllers.getUser);
    
module.exports = router