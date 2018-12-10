const express = require('express');
const mocks = require('../mocks/mock.cuentas');
const router = express.Router();


router.post('/', function (req, res) {


    const body = req.body;
    let resData = {};

    if (!body.telefono || body.telefono === '') {
        res.statusCode = 400;
        resData.status = 400;
        resData.message = 'Parámetros incorrectos';
        resData.request = {
            "telefono": "required"
        };

        res.json(resData);

        return;

    }

    const cuenta = body.telefono;
    console.log("cuenta", cuenta);

    const cuentas = mocks.cuentas;

    let lineasEmpresa = [];

    cuentas.forEach((cuenta)=>{
        lineasEmpresa = [...lineasEmpresa, ...cuenta.lineas_postpago, ...cuenta.lineas_prepago];
    })

    res.statusCode = 200;

    resData.lineas = lineasEmpresa.slice(0, 10);
    resData.message = "lineas de empresa encontradas";
    resData.status = 200;


    res.json(resData);
});

module.exports = router;