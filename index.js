
var http = require('http');
var fs =require('fs');
var url=require('url');
var hostname='127.0.0.1';
const port=5000;
//http://localhost:5000/home.html
http.createServer(function (req, res) {
    console.log(req.url)
    var q =url.parse(req.url, true);
    var filename="."+q.pathname;
    fs.readFile('home.html',function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(port);
