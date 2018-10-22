const express = require('express');
const mocks = require('../mocks/mock.cuentas');
const router = express.Router();

router.post('/', function (req, res) {

    const body = req.body;
    let resData = {};

    if (!req.body.telefono || req.body.telefono === '') {

        res.statusCode = 400;
        resData.status = 400;
        resData.message = 'Parámetros incorrectos';
        resData.request = {
            "telefono": "required"
        };

        res.json(resData);

        return;

    }



    const fire200 = Math.floor(Math.random() * 10) + 1 > 3;

    const cuentas = mocks.shuffle(mocks.cuentas).slice(0, Math.floor(Math.random() * 150));

    if (!!cuentas && fire200) {

        res.statusCode = 200;

        resData.message = "cuentas encontrada";
        resData.status = 200;
        resData.cuentas = cuentas.map((cuenta) => {
            return {
                cuenta: cuenta.cuenta,
                total_prepago: cuenta.total_prepago,
                total_postpago: cuenta.total_postpago
            };
        });
        resData.telefono = body.telefono;
        resData.request = body;

    } else {
        res.statusCode = 404;
        resData.status = 404;
        resData.message = "Cuentas no encontrada";
        resData.request = body;

    }


    console.log("resdata", resData);

    res.json(resData);


});

router.post('/lineas', function (req, res) {

    const body = req.body;
    const cuentas = mocks.cuentas;
    const lineas = mocks.lineas;

    let resData = {};

    if (!req.body.cuenta || req.body.cuenta === '') {

        res.statusCode = 400;
        resData.status = 400;
        resData.message = 'Parámetros incorrectos';
        resData.request = {
            "telefono": "required"
        };

        res.json(resData);

        return;

    }

    let cuenta = cuentas.find((cuenta) => {
        if (cuenta.cuenta === body.cuenta) {
            return cuenta;
        }
    });

    if (!!cuenta) {

        res.statusCode = 200;

        resData.message = "cuenta encontrada";

        resData.status = 200;
        resData.cuenta = cuenta.cuenta;
        resData.total_postpago = cuenta.total_postpago;
        resData.total_prepago = cuenta.total_prepago;
        resData.lineas_postpago = cuenta.lineas_postpago;
        resData.lineas_prepago = cuenta.lineas_prepago;

    } else {
        res.statusCode = 404;
        resData.status = 404;
        resData.message = "Cuenta no encontrada";
        resData.request = body;

    }


    console.log("resdata", resData);

    res.json(resData);


});

router.post('/linea', function (req, res) {
    const body = req.body;
    const cuentas = mocks.cuentas;

    let resData = {};

    if (!body.linea || body.linea === '') {

        res.statusCode = 400;
        resData.status = 400;
        resData.message = 'Parámetros incorrectos';
        resData.request = {
            "linea": "required"
        };

        res.json(resData);

        return;

    }

    let lineas = [];

    cuentas.map((cuenta) => {
        lineas = lineas.concat(cuenta.lineas_prepago);
        lineas = lineas.concat(cuenta.lineas_postpago);
    })


    let linea = lineas.find((linea) => {
        if (linea.numero === body.linea) {
            return linea;
        }
    })

    if (!!linea) {
        res.statusCode = 200;

        resData.message = "Linea encontrada";

        resData.status = 200;
        resData.linea = linea;
        resData.request = {
            'linea': body.linea
        };
    } else {
        res.statusCode = 404;
        resData.status = 404;
        resData.message = "Cuenta no encontrada";
        resData.request = body;
    }

    res.json(resData);
});

module.exports = router;