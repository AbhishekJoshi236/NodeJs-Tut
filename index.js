const http = require('http')
const fs = require("fs")

const  PORT = process.env.PORT || 4000;
// const hostname = 'localhost';
const home = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.end(home);
    }
    else if(req.url === "/about"){
        return res.end("<h1>About Page</h1>");
    }
    else if(req.url === "/contact"){
        return res.end("<h1>Contact Page</h1>");
    }
    else if(req.url === "/services"){
        return res.end("<h1>Services Page</h1>");
    }
    else{
        return res.end("<h1>ERROR 404</h1>");
    }
});

server.listen(PORT,()=>{
    console.log(`server is working .`);
})