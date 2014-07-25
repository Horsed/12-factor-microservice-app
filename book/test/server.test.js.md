# test.js

Yo dawg, I heard you like tests so we put a test in your test so u can test while u test.

    var should = require('chai').should()
      , request = require('supertest')
      , server = require('../lib/server.js');

    describe('Server', function() {
      it('should respond Hello World', function(done) {
        request = request('http://localhost:5555');

        request.get('/hello.txt')
          .expect(200)
          .expect('Hello World', done);
      });
    });