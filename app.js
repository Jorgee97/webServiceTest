var http = require('http');
var mssql = require('mssql');

var config = {
    user: 'ANDREA',
    password: '123',
    server: '192.168.0.136',
    database: 'Pedidos'
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