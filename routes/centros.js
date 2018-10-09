const express = require('express');
const mocks = require('../mocks/mock.centros');
const router = express.Router();

router.get('/get', function (req, res) {


    const body = req.body;
    let resData = mocks;

    resData.request = body;


    res.statusCode = resData.status;

    console.log("resdata", resData);

    res.json(resData);


})


module.exports = router;