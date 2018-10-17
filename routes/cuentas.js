const express = require('express');
const mocks = require('../mocks/mock.cuentas');
const router = express.Router();

/**
 * Desordena un array indicado
 * @param {*} array Respuesta array desordenado
 */
function shuffle(array) {

    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

router.post('/search', function (req, res) {

    console.log("Cuentas Search");
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

    const cuentas = shuffle(mocks.cuentas).slice(0, Math.floor(Math.random() * 30) + 1);

    console.log("cuenta after search", cuentas);

    if (!!cuentas && fire200) {

        res.statusCode = 200;

        resData.message = "cuentas encontrada";
        resData.status = 200;
        resData = { ...resData, cuentas: cuentas };

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

    console.log("Cuentas Search", cuentas.length, lineas.length);


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

    console.log("cuenta after search", cuenta);

    if (!!cuenta) {

        res.statusCode = 200;

        resData.message = "cuenta encontrada";

        const lineasPostpago = shuffle(lineas).slice(0, cuenta.total_postpago);
        const lineasPrepago = shuffle(lineas).slice(0, cuenta.total_prepago);

        resData.status = 200;
        resData.cuenta = cuenta.cuenta;
        resData.lineas_postpago = lineasPostpago;
        resData.lineas_prepago = lineasPrepago;

    } else {
        res.statusCode = 404;
        resData.status = 404;
        resData.message = "Cuenta no encontrada";
        resData.request = body;

    }


    console.log("resdata", resData);

    res.json(resData);


});

module.exports = router;