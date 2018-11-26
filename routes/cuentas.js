const express = require('express');
const mocks = require('../mocks/mock.cuentas');
const mocksFacturas = require('../mocks/mock.facturas');
const router = express.Router();

router.post('/', function (req, res) {


    const body = req.body;
    console.log(body);
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



    const fire200 = Math.floor(Math.random() * 10) + 1 > 2;

    const cuentas = mocks.shuffle(mocks.cuentas).slice(0, Math.floor(Math.random() * 20) + 1);
    //const cuentas = mocks.cuentas.slice(0, 1);
    // const cuentas = mocks.getCuentas(20);

    if (!!cuentas && fire200) {

        res.statusCode = 200;

        resData.message = "cuentas encontrada";
        resData.status = 200;
        resData.cuentas = cuentas.map((cuenta) => {
            return {
                numero: cuenta.numero,
                corte: cuenta.corte,
                saldo: cuenta.saldo,
                fecha_limite: cuenta.fecha_limite,
                facturacion: cuenta.facturacion,
                total_prepago: cuenta.total_prepago,
                total_postpago: cuenta.total_postpago,

            };
        });
        //resData.cuentas = cuentas;
        resData.telefono = body.telefono;
        resData.request = body;

    } else {
        res.statusCode = 404;
        resData.status = 404;
        resData.message = "Cuentas no encontrada";
        resData.request = body;

    }
    res.json(resData);


});

router.post('/lineas', function (req, res) {

    const body = req.body;
    const cuentas = mocks.cuentas;

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
        if (cuenta.numero === body.cuenta) {
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
        resData.lineas_postpago = cuenta.lineas_postpago.map((linea) => {
            return linea.numero;
        });
        resData.lineas_prepago = cuenta.lineas_prepago.map((linea) => {
            return linea.numero;
        });;

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

router.post('/facturas', function (req, res) {
    //let facturas = mocksFacturas.getFacturas();
    //console.log("facturas", facturas);

    const body = req.body;
    let resData = {};

    if (!body.cuenta || body.cuenta === '') {
        res.statusCode = 400;
        resData.status = 400;
        resData.message = 'Parámetros incorrectos';
        resData.request = {
            "cuenta": "required"
        };

        res.json(resData);

        return;

    }

    const cuenta = body.cuenta;
    console.log("cuenta", cuenta);

    const facturasCuenta = mocksFacturas.facturas[cuenta];

    res.statusCode = 200;

    resData.message = "facturas encontradas";
    resData.status = 200;
    resData.facturas = facturasCuenta;


    res.json(resData);
});

router.post('/factura', function (req, res) {
    const body = req.body;
    let resData = {};

    if (!body.factura || body.factura === '') {
        res.statusCode = 400;
        resData.status = 400;
        resData.message = 'Parámetros incorrectos';
        resData.request = {
            "factura": "required"
        };

        res.json(resData);

        return;

    }

    const codigoFactura = body.factura;
    console.log("codigoFactura", codigoFactura);

    const facturas = mocksFacturas.facturas;


    let allFacturas = [];
    Object.values(facturas).map((fact) => {
        allFacturas = [...allFacturas,...fact ];
        
    });

    let factura = allFacturas.find((fact)=>{
        if(fact.codigo == codigoFactura){
            return fact;
        }
    })

    console.log("facturaencontrada", factura);

    if (factura !== null && !!factura) {
        res.statusCode = 200;

        resData.message = "factura encontradas";
        resData.status = 200;

        resData.factura = factura;

        res.json(resData);
    } else {
        res.statusCode = 404;
        resData.status = 404;
        resData.message = 'factura no encontrada';

        res.json(resData);
    }





});

module.exports = router;