function route(handleMap, pathname) {
  console.log('route::' + pathname);
  if (typeof handleMap[pathname] === 'function') {
    handleMap[pathname]();
  } else {
    console.log('404 handler');
  }
}

exports.route = route;
