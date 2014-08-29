var extend = require('extend');
var settings = require('lepass-settings');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var SessionStore = require(settings.session_store)(session);
var sessionStore = new SessionStore(settings.session_store_settings);
module.exports = [{
  use: cookieParser(settings.cookie_secret)
}, {
  use: session({
    name: settings.session_name,
    secret: settings.session_secret,
    resave: false,
    saveUninitialized: true,
    store: sessionStore
  })
}];
