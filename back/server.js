const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Express-Cookbook back-end !');
});

server.listen(process.env.PORT || 3000);
