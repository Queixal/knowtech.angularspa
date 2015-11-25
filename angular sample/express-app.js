var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var fs = require("fs");
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/*", function(req, res) {
	var filePath = req.originalUrl;

	if(filePath === "/") 
		filePath = "./index.html";
	else {
		filePath = "./" + filePath;
	}

	switch(path.extname(filePath)) {
		case ".html":
			res.set("Content-type", "text/html");
			break;

		case ".js":
			res.set("Content-type", "text/javascript");
			break;

		case ".css":
			res.set("Content-type", "text/css");
			break;

	}

	res.send(fs.readFileSync(filePath, "utf8"));
});

server.listen(8888, function () {
    console.log("Node server running on http://localhost:8888");
});