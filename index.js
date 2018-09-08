const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello Heroku\n');
});


server.listen(PORT, () => {
  // eslint-disable-next-line
   console.log(`Server running on port: ${PORT}`);
});
