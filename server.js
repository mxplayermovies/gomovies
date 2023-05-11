const express = require('express');
const next = require('next');
const path = require('path');
const compression = require('compression');
const fs = require('fs');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Define username and password for authentication
const username = 'admin';
const password = 'password';

// Add middleware to authenticate user before granting access to movies.json
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).send('Unauthorized');
    return;
  }

  const encodedCredentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(encodedCredentials, 'base64').toString('utf-8');

  const [enteredUsername, enteredPassword] = credentials.split(':');

  if (enteredUsername === username && enteredPassword === password) {
    next();
  } else {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).send('Unauthorized');
    return;
  }
};

app.prepare().then(() => {
  const server = express();

  server.use('/static', express.static(path.join(__dirname, 'static'), {
    maxAge: dev ? '0' : '365d',
    immutable: true
  }));

  server.use(compression());

  server.get('/api/movies', authenticateUser, (req, res) => {
    fs.readFile('./public/movies.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading movies.json');
      } else {
        const movies = JSON.parse(data);
        res.json(movies);
      }
    });
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
