const request = require('supertest');
const app = require('./app');
const mock = require('mock-fs');

mock({
  'path/to/fake/dir/a.txt': "hello world"
});

request(app)
  .get('/')
  //.expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });


mock.restore();



require('fs').readFileSync('/dev/stdin', 'utf8');

//const fs = require('fs');

//
//
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
//
//fs.writeFileSync('path/to/fake/dir/a.txt', "hoge");
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
//
//mock({
//  'path/to/fake/dir/a.txt': "hello world2"
//});
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString());
//
//mock.restore();
//console.log(fs.readFileSync('path/to/fake/dir/a.txt').toString()); // cause Error: ENOENT
