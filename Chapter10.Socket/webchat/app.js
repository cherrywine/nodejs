/**
* Chatting App Example
*/
var http = require("http");
var fs = require("fs");
var socketio = require("socket.io");

var server = http.createServer(function(req, res) {
   fs.readFile('chat.html', function(error, data) {
       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end(data);
   });
});

server.listen(process.env.PORT, process.env.IP, function() {
   console.log("Express server listening on port " + process.env.PORT); 
});

var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
   socket.on('message', function (data) {
      io.sockets.emit('message', data);
   });
});