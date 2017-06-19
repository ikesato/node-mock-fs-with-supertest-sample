const fs = require('fs');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log("GET", req.path);
  res.send(fs.readFileSync('path/to/fake/dir/a.txt').toString());
  //res.send('hello world');
});

//app.listen(3000);

module.exports = app;
