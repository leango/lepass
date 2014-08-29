module.exports = {
  path: '/routeTable',
  get: function(req, res) {
    var routeTable = req.app.get('routeTable');
    var publicTable = {};
    Object.keys(routeTable).forEach(function(name) {
      if (name[0] === '_') return;
      publicTable[name] = routeTable[name];
    });
    res.json(publicTable);
  }
};
module.exports.baseUrl = '/.well-known';