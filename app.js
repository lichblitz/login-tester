const express = require('express');
const bodyParser = require("body-parser");
const mocks = require('./mock.js');
const cors = require('cors')



const app = express();

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions));

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

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
