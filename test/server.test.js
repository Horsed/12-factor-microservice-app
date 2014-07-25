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
