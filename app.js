var express = require('express');
var path = require('path');
var extend = require('extend');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var engines = require('consolidate');


var settings = require('lepass-settings');
extend(process.env, settings.env);

console.log(settings);
var app = express();

app.set('port', process.env.PORT);
app.set('bindip', process.env.BINDIP);
app.set('views', path.join(__dirname, 'views'));
app.engine('jade', engines.jade);

module.exports = app;

var router = require('require-routes')('routes');
app.use(router);
app.set('routeTable', router.routeTable);
