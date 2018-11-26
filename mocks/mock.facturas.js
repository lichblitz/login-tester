const cuentas = [
    "89376319",
    "14057691",
    "12007882",
    "82470616",
    "10080041",
    "37091293",
    "87607859",
    "10517398",
    "25215748",
    "51522747",
    "40574792",
    "61382602",
    "44506287",
    "23923909",
    "10034967",
    "54127632",
    "17613735",

];


function getFacturas() {

    const codigoFacturas = ["EC", "EM", "EV"];

    let facturas = {};


    cuentas.forEach((cuenta) => {

        let facturasCuenta = [];

        for (let i = 0; i < 4; i++) {


            let facturaCuenta = {
                "cuenta": cuenta,
                "codigo": `${codigoFacturas[Math.floor(Math.random() * 2)]}-${Math.floor(Math.random() * 999999) + 100000}`,
                "monto": "$100.100.100",
                "fecha_facturacion": "01/09/2018",
                "fecha_vencimiento": "30/09/2018"
            };

            facturasCuenta.push(facturaCuenta);
        }

        for (let i = 0; i < 4; i++) {


            let facturaCuenta = {
                "cuenta": cuenta,
                "codigo": `${codigoFacturas[Math.floor(Math.random() * 2)]}-${Math.floor(Math.random() * 999999) + 100000}`,
                "monto": "$143.100.100",
                "fecha_facturacion": "01/10/2018",
                "fecha_vencimiento": "30/10/2018"
            };

            facturasCuenta.push(facturaCuenta);
        }

        for (let i = 0; i < 4; i++) {


            let facturaCuenta = {
                "cuenta": cuenta,
                "codigo": `${codigoFacturas[Math.floor(Math.random() * 2)]}-${Math.floor(Math.random() * 999999) + 100000}`,
                "monto": "$100.100.100",
                "fecha_facturacion": "01/11/2018",
                "fecha_vencimiento": "30/11/2018"
            };

            facturasCuenta.push(facturaCuenta);
        }


        for (let i = 0; i < 4; i++) {


            let facturaCuenta = {
                "cuenta": cuenta,
                "codigo": `${codigoFacturas[Math.floor(Math.random() * 2)]}-${Math.floor(Math.random() * 999999) + 100000}`,
                "monto": "$100.100.100",
                "fecha_facturacion": "01/12/2018",
                "fecha_vencimiento": "30/12/2018"
            };

            facturasCuenta.push(facturaCuenta);
        }



        facturas[cuenta] = facturasCuenta;

    });


    return facturas;



}

const facturas = {
    "10034967": [
        {
            "cuenta": "10034967",
            "codigo": "EC-173206",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-787007",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-109892",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-265346",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-722643",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-107829",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-971615",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-206039",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-933924",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-403672",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-882019",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-585682",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-786362",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-264898",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EC-836882",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10034967",
            "codigo": "EM-506995",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "10080041": [
        {
            "cuenta": "10080041",
            "codigo": "EM-828694",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-950008",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-842845",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-1004117",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-169049",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-1098093",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-784936",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-1000932",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-165132",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-654995",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-922805",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-270901",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-272927",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-425239",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EC-761246",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10080041",
            "codigo": "EM-256869",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "10517398": [
        {
            "cuenta": "10517398",
            "codigo": "EC-445056",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-385430",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-341773",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EM-599046",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-342660",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-108808",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-487387",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-138632",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EM-238271",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-993239",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-272432",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-525804",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-521094",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EM-961476",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EC-399388",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "10517398",
            "codigo": "EM-911322",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "12007882": [
        {
            "cuenta": "12007882",
            "codigo": "EC-475233",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-664480",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-275180",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-912137",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-994743",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-1053562",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-992673",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-722779",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-961209",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-1090838",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-1058017",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-221237",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-503619",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EC-615301",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-534331",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "12007882",
            "codigo": "EM-918159",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "14057691": [
        {
            "cuenta": "14057691",
            "codigo": "EM-835588",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-930332",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EC-595547",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EC-379945",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-648742",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-979225",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EC-601578",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-1070289",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-277473",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EC-338042",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-601056",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-696214",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EC-301955",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-508449",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EC-721077",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "14057691",
            "codigo": "EM-842737",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "17613735": [
        {
            "cuenta": "17613735",
            "codigo": "EM-1067144",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-868109",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EC-583394",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-782289",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EC-784157",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-268894",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-294396",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-1072611",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-128938",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-357026",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EC-584711",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-457256",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-737786",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EC-403880",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-131464",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "17613735",
            "codigo": "EM-1080611",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "23923909": [
        {
            "cuenta": "23923909",
            "codigo": "EC-838468",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EC-1083828",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EC-969225",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EC-300237",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-697284",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-267174",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-120352",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EC-309367",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-137304",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EC-834956",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-1029797",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-656635",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-433829",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-1076486",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EM-1050766",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "23923909",
            "codigo": "EC-253950",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "25215748": [
        {
            "cuenta": "25215748",
            "codigo": "EM-146763",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-292698",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-416125",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-474258",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-137637",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-1008886",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-280334",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-1059570",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-105748",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-166136",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-155462",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-891158",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-978315",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-951001",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EM-540868",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "25215748",
            "codigo": "EC-754437",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "37091293": [
        {
            "cuenta": "37091293",
            "codigo": "EC-732157",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EC-818838",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EC-926823",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-589511",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-693100",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-1051125",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-274817",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-466220",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EC-967425",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-215915",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-918859",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EC-816140",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EC-110582",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-588033",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EM-889506",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "37091293",
            "codigo": "EC-278090",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "40574792": [
        {
            "cuenta": "40574792",
            "codigo": "EC-830960",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EM-1063065",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EM-274370",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-811125",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EM-909400",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EM-344196",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-787017",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-156352",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-1095241",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-364371",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EM-759498",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-637283",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-959153",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-625814",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EM-349044",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "40574792",
            "codigo": "EC-757903",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "44506287": [
        {
            "cuenta": "44506287",
            "codigo": "EM-521062",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EM-421812",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-278295",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-170871",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-1006123",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-177663",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EM-111236",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-325427",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-865033",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-118462",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EM-670691",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-277724",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-221327",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EC-325910",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EM-841616",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "44506287",
            "codigo": "EM-523781",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "51522747": [
        {
            "cuenta": "51522747",
            "codigo": "EC-485743",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EC-489455",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-911480",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-546681",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-314013",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-305263",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-913623",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EC-557093",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-987874",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EC-521605",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EC-639745",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-447201",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-506296",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-442726",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EC-645771",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "51522747",
            "codigo": "EM-367978",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "54127632": [
        {
            "cuenta": "54127632",
            "codigo": "EC-706355",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-874604",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-770165",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EM-315562",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-746853",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-705095",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-1089688",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-591580",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EM-625411",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EM-729780",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-132026",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EM-609544",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EM-145456",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-694780",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EC-801163",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "54127632",
            "codigo": "EM-1085755",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "61382602": [
        {
            "cuenta": "61382602",
            "codigo": "EC-806360",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EC-183175",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-1008419",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EC-399165",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-127614",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-496467",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-815083",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-650754",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EC-453358",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-133033",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-249474",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-822330",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EC-105139",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EC-1018317",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EC-225472",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "61382602",
            "codigo": "EM-642794",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "82470616": [
        {
            "cuenta": "82470616",
            "codigo": "EM-501792",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-625139",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EM-633619",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-642443",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EM-108328",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-211095",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EM-817184",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-142044",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-987644",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-873825",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-828608",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-223374",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EM-118907",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-901397",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EC-731119",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "82470616",
            "codigo": "EM-111661",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "87607859": [
        {
            "cuenta": "87607859",
            "codigo": "EC-543956",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-1083175",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-176774",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-674239",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-915703",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-126854",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-776435",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-691981",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-307419",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-1068027",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-187403",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-336279",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-729869",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-248211",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EM-1019349",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "87607859",
            "codigo": "EC-651537",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ],
    "89376319": [
        {
            "cuenta": "89376319",
            "codigo": "EM-620784",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-122222",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-926222",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-577052",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/09/2018",
            "fecha_vencimiento": "30/09/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-968848",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-336380",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-796866",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-162552",
            "monto": "$143.100.100",
            "fecha_facturacion": "01/10/2018",
            "fecha_vencimiento": "30/10/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-738485",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-364653",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-426491",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-1062810",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/11/2018",
            "fecha_vencimiento": "30/11/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-1035251",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-939925",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EC-493786",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        },
        {
            "cuenta": "89376319",
            "codigo": "EM-600269",
            "monto": "$100.100.100",
            "fecha_facturacion": "01/12/2018",
            "fecha_vencimiento": "30/12/2018"
        }
    ]
}


module.exports = {
    getFacturas, facturas
}


















