var http = require('http');
var url = require('url');

function run(route, handleMap) {
  function onReq(req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname + ' req received');
    route(handleMap, pathname);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('xxi');
    res.end();
  }

  http.createServer(onReq).listen(8999);

  console.log('server start');
}

exports.run = run;
