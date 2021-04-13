const http = require('http');
const fs = require('fs');
const url = require('url');


const renderPage=(filename,req,res)=>{
    fs.readFile(`./${filename}`, (err, file) => {
        
        res.write(file);
        res.end();
    })
}


const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true);
    // console.log("queryobject", queryObject);
    req.url = queryObject.pathname;
    switch (req.url) {
        case '/':{
            renderPage("home.html",req,res);
            break;
        }
        case '/about':
            renderPage("about.html",req,res);
            break;
        case  '/contactus':
            renderPage("contactus.html",req,res);
            break;
        default:
            break;
    }
})

server.listen(4000, () => {
    console.log('http://127.0.0.1:4000');
});