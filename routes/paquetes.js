const express = require('express');
const mocks = require('../mocks/mock.paquetes');
const router = express.Router();


router.get('/', function (req, res) {

    //TODO: obtener params de get ?tipo-paquete=recurrente
    const body = req.body;
    let resData = {};


    res.statusCode = 200;

    resData.paquetes = [...mocks.paquetesAdicionales, ...mocks.paquetesRecurrentes]
    resData.message = "lineas de empresa encontradas";
    resData.status = 200;


    res.json(resData);
});

module.exports = router;