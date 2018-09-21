const express = require('express');
const bodyParser = require("body-parser");
const mocks = require('./mock.js');



const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());



app.get('/', function (req, res) {

  res.send('Hello World!');
});


app.post('/login', function (req, res) {

  const body = req.body;

  let resData = mocks[body.typeLogin][body.typeRequest];

  resData.request = body;

  console.log("resdata", resData);

  res.json(resData);


})

app.listen(3000, "0.0.0.0", function () {
  console.log('Example app listening on port 3000!');
});
