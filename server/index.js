var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handleMap = {
  '/': handler.start,
  '/start': handler.start,
  '/upload': handler.upload
};

server.run(router.route, handleMap);
