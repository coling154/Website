const http = require('http');
const fs =require('fs');
const url=require('url');
const hostname='127.0.0.1';
const port=5000;
http.createServer(function (req, res) {
    //console.log("connection from");
    console.log(req.url);
    var q =url.parse(req.url, true);
    var filename="."+q.pathname;
    fs.readFile(filename,function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);