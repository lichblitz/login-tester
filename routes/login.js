const express = require('express');
const mocks = require('../mocks/mock.login');
const router = express.Router();

router.post('/', function (req, res) {


    const body = req.body;
    let resData;



    if (body.attempts >= 5) {
        resData = mocks[body.typeLogin]['failed_401'];
    } else {

        resData = mocks[body.typeLogin][body.typeRequest];
    }

    resData.request = body;
    res.statusCode = resData.status;

    console.log("resdata", resData);

    res.json(resData);


})


module.exports = router;