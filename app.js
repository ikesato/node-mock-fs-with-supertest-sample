const fs = require('fs');
const express = require('express');
const app = express();

app.get('*', (req, res) => {
  console.log("GET", req.path);
  const r = fs.readFileSync('path/to/fake/dir/a.txt').toString();
  res.send(r);
});

//app.listen(3000);
module.exports = app;
