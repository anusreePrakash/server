var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitetr();

// eventEmitter.on('welcome',function(){
// 	console.log('hai');
// });
// eventEmitter.on('fine',function(){
// 	console.log('how are you');
// })





var handleRequest = function(request,response){
	console.log("it works"+ request.url);
	console.log(request.connection.remoteAddress.toString())
	console.log(reader.header())
	var data="it works";
	response.write(data);
	response.end()

}


var server = http.createServer(handleRequest)
server.listen(4000);