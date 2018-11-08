const bonos = [
    {
        "tipo": "datos",
        "consumo": Math.floor(Math.random() * 100),
        "capacidad": 100,
        "medida": "GB"
    },
    {
        "tipo": "datos",
        "consumo": Math.floor(Math.random() * 50),
        "capacidad": 50,
        "medida": "GB"
    },
    {
        "tipo": "sms",
        "consumo": Math.floor(Math.random() * 1000),
        "capacidad": 1000
    },
    {
        "tipo": "sms",
        "consumo": Math.floor(Math.random() * 500),
        "capacidad": 500
    },
    {
        "tipo": "datos",
        "consumo": Math.floor(Math.random() * 25),
        "capacidad": 25,
        "medida": "GB"
    },
    {
        "tipo": "sms",
        "consumo": Math.floor(Math.random() * 3000),
        "capacidad": 3000
    },
    {
        "tipo": "datos",
        "consumo": Math.floor(Math.random() * 10),
        "capacidad": 10,
        "medida": "GB"
    },
    {
        "tipo": "minutos",
        "consumo": Math.floor(Math.random() * 5000),
        "capacidad": 5000
    },
    {
        "tipo": "minutos",
        "consumo": Math.floor(Math.random() * 1500),
        "capacidad": 1500
    },

]

module.exports = bonos;