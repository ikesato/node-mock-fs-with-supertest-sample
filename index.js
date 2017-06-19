const request = require('supertest');
const app = require('./app');
const mock = require('mock-fs');

mock({
  'path/to/fake/dir/a.txt': "hello world"
});

request(app)
  .get('/')
  .expect(200)
  .end(function(err, res) {
    console.log(res.text)
    mock.restore();
    if (err) throw err;
  });
