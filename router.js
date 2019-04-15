function route(handle, pathname, response, request) {
    if(typeof handle[pathname] === 'function') {
        console.log('routing request now');
        handle[pathname](response, request);
    } else {
        console.log('YIKES');
    }
}

exports.route = route;
