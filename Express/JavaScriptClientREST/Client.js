var request = require('request');

// Set the headers
var headers = {
    'User-Agent': 'Super Agent/0.0.1',
    'Content-Type': 'application/json'
}

// Configure the request
var options = {
  url: 'http://localhost:1337',
  method: 'post',
  headers: headers,
  json: {'message': 'hey'}
};

// Start the request
request(options, function (error, response, body) {
  if (!error && response.statusCode === 200) {
      // Print out the response body
      console.log(body);
  }
});
