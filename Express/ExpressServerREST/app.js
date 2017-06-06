const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', function (request, response) {
  // const b = JSON.stringify(request.body);
  const b = request.body
  sender.send(b.command, b.text, b.id);
  response.sendStatus(200);
});

app.listen (process.env.PORT || 1337);
