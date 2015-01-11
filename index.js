var express = require('express');
var app = express();
var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/html/index.html');
});

var osc = require('node-osc');
var oscclient = new osc.Client('127.0.0.1', 3333);

io.on('connection', function(socket){
  console.log('user connected');

  socket.on('change effect', function(type){
    switch(type) {
      case 'non':
        console.log('no effect');
        oscclient.send('/changeeffect', 'non');
        break;
      case 'canny':
        console.log('change to canny effect');
        oscclient.send('/changeeffect', 'canny');
        break;
      case 'blur':
        console.log('change to blur effect');
        oscclient.send('/changeeffect', 'blur');
        break;
    }
  });

  socket.on('canny thresh1', function(value){
    oscclient.send('/cannythresh/1', value);
  });
  socket.on('canny thresh2', function(value){
    oscclient.send('/cannythresh/2', value);
  });
  socket.on('blur size', function(value){
    oscclient.send('/blursize', value);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});