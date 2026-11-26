const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = { '.html':'text/html', '.css':'text/css', '.js':'application/javascript', '.webp':'image/webp', '.jpg':'image/jpeg', '.png':'image/png' };
http.createServer((req, res) => {
  let f = path.join(root, req.url === '/' ? '/index.html' : req.url);
  fs.readFile(f, (e, d) => {
    if (e) { res.statusCode = 404; res.end('not found'); return; }
    res.setHeader('Content-Type', types[path.extname(f)] || 'application/octet-stream');
    res.end(d);
  });
}).listen(8080, () => console.log('Servidor en http://localhost:8080'));
