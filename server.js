var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
//app.use(express.bodyParser());

//static content
app.all('/*', function(req, res) {
  res.sendfile('index.html', { root: __dirname+'/public' });
});

//app.listen(3000);

module.exports = app;