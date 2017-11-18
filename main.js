/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');  
var app = express();  
var server = require('http').createServer(app); 
var io = require('socket.io')(server); 
var exec = require('child_process').exec;
var child;




app.use(express.static(__dirname + '/public')); 
//redirect / to our index.html file
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function(client) {  
	//when the server receives clicked message, do this
    client.on('clicked', function(data) {
    	  
		  //send a message to ALL connected clients
		  io.emit('buttonUpdate', "");
		  child = exec("sh testsh.sh", function (error,stdout,stderr) {



  console.log('stdout: ' + stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
  
});
    });
});

//start our web server and socket.io server listening
server.listen(3003, function(){
  console.log('listening on *:3003');
}); 



