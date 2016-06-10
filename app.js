var express = require('express');
var app = express();

var vegetables = ['Carrots', 'Cucumber', 'Peas'];

app.set('view engine', 'ejs');


app.get('/', function(request, response) {
  response.render('index', {name: 'Brian Peppers'} ); 
});

app.get('/vegetables', function(request, response) {
  response.send(vegetables.join(", "));
});

app.get('/meaning-of-life', function(request, response) {
  response.send('42');
});

app.get('/hello/:name', function(request, response) {
  response.send('Hello ' + request.params.name);
});

app.get('/companies/:company/products/:productName', function(request, response) {
  response.send(request.params.company + ' makes the ' + request.params.productName);
});

app.get('/hi', function(request, response) {
  var name = request.query.name;
  response.send('Hello, ' + name);
});

app.get('/greeting', function(request, response) {
  response.send('Hello, ' + [request.query.first, request.query.last].join(' '));
});

app.listen(1337, function() {
  console.log('Listening on the most elite port...');
});
