var WebSocketClient = require('websocket').client;

var args = process.argv.slice(2);
console.log(args);

//module constants
const wsPort = process.env.WS_PORT || 7145


if (args.length < 2) {
	console.log("Usag: client-ws <patient-id> <ecg|spo2>");
	process.exit(1);
}

console.log("Port", wsPort)
console.log("Patient", args[0]);
console.log("Parameter", args[1]);

var client = new WebSocketClient();

client.on('connectFailed', function(error) {
	console.log('Connect Error: ' + error.toString());
});

client.on('connect', function(connection) {
	console.log('WebSocket Client Connected');
	connection.on('error', function(error) {
		console.log("error");
		console.log("Connection Error: " + error.toString());
	});
	connection.on('close', function() {
		console.log("close");
		console.log('echo-protocol Connection Closed');
	});
	connection.on('message', function(message) {
		console.log("message", message);
		if (message.type === 'utf8') {
			let ts = Date.now();

			// timestamp in milliseconds
			console.log(ts);

			// timestamp in seconds
			console.log(Math.floor(ts/1000));

			console.log("Received: '" + message.utf8Data + "'");
		}
	});

	//function sendNumber() {
	//	if (connection.connected) {
		//	var number = Math.round(Math.random() * 0xFFFFFF);
			//connection.sendUTF(number.toString());
		//	setTimeout(sendNumber, 1000);
	//	}
	//}
	//sendNumber();
});

//client.connect('ws://52.175.199.71:7145/' + args[1] + "?pid=" + args[0]);
client.connect('ws://127.0.0.1:' + wsPort+'/' + args[1] + "?pid=" + args[0]);
