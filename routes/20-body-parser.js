var bodyParser = require('body-parser');
module.exports = [{
  use: bodyParser.json()
}, {
  use: bodyParser.urlencoded({ extended: false })
}];
