
// const fs=require('fs');

// const file=fs.readFileSync('file1.txt','utf8');
// console.log("sync= "+ file)

// const file2= fs.readFile('file1.txt','utf8',(err,res)=>{
//     console.log('async= '+res);
    
// });

// const libjs=require('./lib')

// console.log(libjs.areaCircle(5));
// console.log(libjs.pi);
// console.log(libjs.areaRectangle(5,4));
// console.log(libjs.areaCyclinder(5,4));


var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(8080);
console.log("Server is listening");