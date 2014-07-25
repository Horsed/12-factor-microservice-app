# HTTP server

The HTTP server will be the main entry point for our service consumers. From here on we will forward HTTP requests to the router. That means we will have to deal with things like
* handling RPC like requests with the router
* ...

First let's setup our dependencies. We'll use [express]() for HTTP part.

    var express = require('express')
      , app = express();

Now let's configure a first dummy route which just responds 'Hello World':

    app.get('/hello.txt', function(req, res) {
      res.send('Hello World');
    });

And start the server:

    var server = app.listen(5555, function() {
        console.log('Listening on port %d', server.address().port);
    });