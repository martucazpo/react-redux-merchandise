const authFunctions = require("./functions/authFunctions");

module.exports = {
    getFirstRoute: authFunctions.getFirstRoute,
    registerUser: authFunctions.registerUser,
    loginUser: authFunctions.loginUser,
    getUser: authFunctions.getUser
}