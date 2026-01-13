let server = require('./server');
let router = require('./router');
let requestHandler = require('./requestHandler'); //만든 모듈을 index에 소환

const mariadb = require('./database/connect/mariadb')
mariadb.connect();

server.start(router.route, requestHandler.handle);