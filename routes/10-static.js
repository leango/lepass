var path = require('path');
var express = require('express');
module.exports = {
  path: '/public',
  use: express.static(path.join(__dirname, '../public'))
};
