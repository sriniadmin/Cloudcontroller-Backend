//a-z Standard Modules
const http = require('http');
const redis = require("redis");
const url = require('url');
const util = require('util');
const WebSocket = require('ws');

//module constants
const wsPort = process.env.WS_PORT || 7145
let wsProd = true

if (process.env.WS_DEBUG) {
	wsProd = false
}

const server = http.createServer();
const wssPatientStream = new WebSocket.Server({ noServer: true });

/**
 * Returns a random number between min (inclusive) and max (inclusive)
 */
function randBetween(min, max, precision=0) {
	_precision = Math.pow(10, Math.max(precision, 0));
	return Math.floor(
		Math.random() * ((max*_precision) - (min*_precision) + 1) + (min*_precision)
	)/_precision;
}

wssPatientStream.on('connection', function connection(ws, req) {
	let tick = 0
	const redisClntParams = {
		host : '127.0.0.1',  
		no_ready_check: true,
		auth_pass: 'sOmE_sEcUrE_pAsS',                                                                                                                                                           
	}

	const client = redis.createClient(redisClntParams);

	let qs = url.parse(req.url, true).query;
	let pKey = qs["pid"] + "-live";

	console.log("CONN URL", req.url);
	console.log(qs["pid"]);
	console.log("Fetching", pKey);

	client.on('message', function (channel, message) {
		console.log("Message: " + message + " on channel: " + channel);
		ws.send(message)
	});

	client.on('error', err => {       
		console.log(err.message)
	});

	client.subscribe(pKey);

	ws.on("close", () => {
		client.unsubscribe(pKey);
		client.end(true);
		console.log("Disconnected")
	});
});

server.on('upgrade', function upgrade(request, socket, head) {
	const pathname = url.parse(request.url).pathname;

	if (pathname === '/ecg') {
		wssPatientStream.handleUpgrade(request, socket, head, function done(ws) {
			wssPatientStream.emit('connection', ws, request);
		});
	}
});

server.listen(wsPort, "0.0.0.0" ,err => {
	console.log("Server Listening on %d", wsPort)

	if (wsProd) {
		console.log = function () { }
	}

});
