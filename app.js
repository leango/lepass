var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var engines = require('consolidate');


var settings = require('boot-settings')(
  path.join(path.dirname(require.resolve('lepass-settings')), 'settings'));
console.log(settings);
var app = express();

app.set('port', process.env.PORT);
app.set('bindip', process.env.BINDIP);

app.engine('jade', engines.jade);

app.use(settings._applogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(settings.app.cookieSecret));
app.use(express.static(path.join(__dirname, 'public')));

// setup session store
var SessionStore = require(settings.app.sessionStore)(session);
var sessionStore = new SessionStore(settings.app.sessionStoreSetting);
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: settings.app.cookieSecret,
  store: sessionStore
}));

var passlock = require('passlock');
passlock.initialize(settings);
app.use(passlock.router);

module.exports = app;
