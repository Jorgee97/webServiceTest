var http = require('http');
var mssql = require('mssql');

var config = {
    user: 'user',
    password: 'password',
    server: 'localhost',
    database: 'name'
};
var sqlConnection = new mssql.Connection(config);
var request = new mssql.Request(sqlConnection);

function connectMe(){
    return sqlConnection.connect(function(err){
        if (err) {}
    });
} 

var server = http.createServer();
var io = require('socket.io').listen(server);
var port = process.env.VCAP_APP_PORT || 3000;

io.sockets.on('connection', function(socket){

});

server.listen(port);
console.log("Server is up on port: ", port);
