const fs = require('fs')
const http = require('http');
const url = require('url');
const { type } = require('os');


const home = fs.readFileSync(`${__dirname}/index.html`, 'UTF-8');
const login = fs.readFileSync(`${__dirname}/templates/login.html`, 'UTF-8');
///             server created below               ///
const server = http.createServer((req, res) => {

    const { query, pathname } = url.parse(req.url, true);
    if (pathname === '/' || pathname === '/home') 
    {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(home);
    }
    else if (pathname === '/login')
    {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(login);
    }
});

server.listen(8000, '127.0.1.1', () => {
    console.log('Mahi Maar raha hai!')
})