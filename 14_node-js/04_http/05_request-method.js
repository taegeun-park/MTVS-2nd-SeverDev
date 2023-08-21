const fs = require('fs');
const http = require('http');

http.createServer((request, response) => {
    fs.readFile('./index.html', (err, data) => {

        if (request.method === 'GET' && request.url === '/') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
        }
        if (request.method === 'GET' && request.url === '/menu') {
            response.writeHead(200, { 'Content-type': 'text/html; charset-utf-8' });
            response.write(fs.readFileSync('<h1>Menu목록을 요청합니다.</h1>'));
        }
    });
}).listen(8888, () => console.log('listening on port 8888'));


