'use strict';

const express = require('express');
var ip = require('ip');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello World! I am responding from ${ip.address()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
console.log(`My internal IP is: ${ip.address()}`);