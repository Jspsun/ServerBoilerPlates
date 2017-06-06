const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.post('/', function (request, response) {

  // function goes here and just return what you need
  const b = request.body;
  console.log(b);
  var results = {
    message : b.message
  };
  response.status(200).json(results);
});

app.listen(process.env.PORT || 1337);
