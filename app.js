const express = require('express');
const bodyParser = require("body-parser");
const login = require('./routes/login');
const perfil = require('./routes/perfil');
const cors = require('cors')



//SETUP AND CONFIG
const app = express();

const corsOptions = {
  origin: '*',
  allowHeaders: 'Content-type,Authorization',
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());




//ROUTES
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/login', bodyParser.json(), login);
app.use('/perfil', bodyParser.json(), perfil);



var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(server_port, server_ip_address, function () {
  console.log("Listening on " + server_ip_address + ", port " + server_port)
});





