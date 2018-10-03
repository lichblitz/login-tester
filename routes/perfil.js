const express = require('express');
const mocks = require('../mocks/mock.perfil');
const router = express.Router();


router.post('/', function (req, res) {


  let result = mocks.result.map((item) => {
    item.numero_telefono = req.body.telefono;
    return item;
  })
  res.statusCode = mocks.status;
  res.json(result);


});

module.exports = router;