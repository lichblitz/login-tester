const paquetesAdicionales = [
    {
        "nombre": "MES500MBLTE",
        "datos_incluidos": "500 megas",
        "vigencia": "1 mes",
        "codigo_scl": "BDA110",
        "tipo": "adicional"
    },
    {
        "nombre": "MES1GBLTE",
        "datos_incluidos": "1 giga",
        "vigencia": "1 mes",
        "codigo_scl": "BDA111",
        "tipo": "adicional"
    },
    {
        "nombre": "MES2GBLTE",
        "datos_incluidos": "2 gigas",
        "vigencia": "1 mes",
        "codigo_scl": "BDA112",
        "tipo": "adicional"
    },
    {
        "nombre": "MES4GBLTE",
        "datos_incluidos": "4 gigas",
        "vigencia": "1 mes",
        "codigo_scl": "BDA113",
        "tipo": "adicional"
    }

];

const paquetesRecurrentes = [
    {
        "datos_incluidos": "500 megas",
        "codigo_scl": "PLTE48",
        "tipo": "recurrente"
    },
    {
        "datos_incluidos": "1 giga",
        "codigo_scl": "PLTE312",
        "tipo": "recurrente"
    }
]

module.exports = { paquetesAdicionales, paquetesRecurrentes }
