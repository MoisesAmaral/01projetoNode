import http from 'node:http';



const server = http.createServer((req, res) => {
 return res.end('Moises Amaral moreira');
});

server.listen(3333);
