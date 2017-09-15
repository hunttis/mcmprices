var express = require('express');
var path = require('path');
var app = express();

const MkmApiClient = require('mkm-api');
const Client = new MkmApiClient(process.env.APP_TOKEN, process.env.APP_SECRET);
Client.setAccessTokens(process.env.ACCESS_TOKEN, process.env.ACCESS_SECRET);

console.log('Starting server...');

app.get('/', function(req, res, next) {
  res.sendStatus(200);
});

function mapCardnameToInterface(cardname) {
  return .replace(new RegExp('[\'-+.^:,]', 'g'), '').replace(new RegExp(' ', 'g'), '_').toLowerCase();
}

app.get('/products/:cardname', function(req, res, next) {
  console.log('Trying to find', req.params.cardname);
  Client.get('/ws/v1.1/output.json/products/' + mapCardnameToInterface(req.params.cardname) + '/1/1/false').then(res=> {
    console.log('Found it!', res.headers);
    return res.response;
  }).then( response => {
    res.send(response);
  }).catch(e => {
    console.log('Error occured :( ', e);
    res.sendStatus(500);
  });
});

app.use(function(req, res, next) {
  res.sendStatus(404);
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server should be running in', port);
});

module.exports = app;
