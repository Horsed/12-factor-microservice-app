var express = require('express')
  , app = express();
app.get('/hello.txt', function(req, res) {
  res.send('Hello World');
});
var server = app.listen(5555, function() {
    console.log('Listening on port %d', server.address().port);
});
