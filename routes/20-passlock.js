var settings = require('lepass-settings');
var passlock = require('passlock');
passlock.initialize(settings.passlock);
module.exports = passlock.router;

var signinRoute = passlock._lockit.lockit.config.login.route;
var signoutRoute = passlock._lockit.lockit.config.login.logoutRoute;
module.exports.routeTable = {
  signin: {
    get: signinRoute,
    post: '/rest' + signinRoute
  },
  signout: {
    get: signoutRoute,
    post: '/rest' + signoutRoute
  },
  authorization: {
    get: settings.oauth.endpoints.authorize
  },
  token: {
    get: settings.oauth.endpoints.tokenInfo,
    post: settings.oauth.endpoints.token
  }
};
