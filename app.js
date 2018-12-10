const express = require('express');
const bodyParser = require("body-parser");
const login = require('./routes/login');
const perfil = require('./routes/perfil');
const centros = require('./routes/centros');
const puntos = require('./routes/puntos');
const cuentas = require('./routes/cuentas');
const lineas = require('./routes/lineas');
const paquetes = require('./routes/paquetes');
const cors = require('cors')



//SETUP AND CONFIG
const app = express();

const corsOptions = {
  origin: '*',
  allowHeaders: 'Content-type,Authorization',
  methods: "GET,POST",
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
app.use('/centros', bodyParser.json(), centros);
app.use('/puntos-pago', bodyParser.json(), puntos);
app.use('/cuentas', bodyParser.json(), cuentas);
app.use('/lineas', bodyParser.json(), lineas);
app.use('/paquetes', bodyParser.json(), paquetes);


if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;






