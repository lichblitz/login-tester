

const planes = {
    "H1H": {
        "plan_id": "H1H",
        "cargo_basico": 92900,
        "minutos": 2000,
        "sms": 1000,
        "datos": {
            "capacidad": 25,
            "medida": "GB"
        },
        "servicios_incluidos": [
            {
                "tipo": "cloud",
                "capacidad": 20,
                "medida": "GB"

            },
            {
                "tipo": "seguridad móvil empresarial",
                "medida": "Premium"

            },
            {
                "tipo": "apps negocios",
                "productos": ["Geogestión", "correo empresarial", "empresa en linea", "Team talk"]
            },
            {
                "tipo": "ldi",
                "capacidad": 0,

            },
            {
                "tipo": "nacional",
                "capacidad": 0,

            },
            {
                "tipo": "redes sociales",
                "redes": ["waze", "line", "facebook", "twitter", "whatsapp", "office365", "yahoo", "gmail"],

            }
        ]
    },
    "IEE": {
        "plan_id": "IEE",
        "cargo_basico": 79900,
        "minutos": 1000,
        "sms": 1000,
        "datos": {
            "capacidad": 15,
            "medida": "GB"
        },
        "servicios_incluidos": [
            {
                "tipo": "cloud",
                "capacidad": 10,
                "medida": "GB"

            },
            {
                "tipo": "seguridad móvil empresarial",
                "medida": "Básico"

            },
            {
                "tipo": "apps negocios",
                "productos": ["Geogestión", "correo empresarial", "empresa en linea", "Team talk"]
            },
            {
                "tipo": "ldi",
                "capacidad": 1000,

            },
            {
                "tipo": "nacional",
                "capacidad": 0,

            },
            {
                "tipo": "redes sociales",
                "redes": ["facebook", "twitter", "whatsapp", "office365", "yahoo", "gmail"],

            }
        ]
    },
    "H3J": {
        "plan_id": "H3J",
        "cargo_basico": 59900,
        "minutos": 500,
        "sms": 1000,
        "datos": {
            "capacidad": 9,
            "medida": "GB"
        },
        "servicios_incluidos": [
            {
                "tipo": "cloud",
                "capacidad": 5,
                "medida": "GB"

            },
            {
                "tipo": "apps negocios",
                "productos": ["Geogestión", "correo empresarial", "empresa en linea", "Team talk"]
            },
            {
                "tipo": "ldi",
                "capacidad": 500,

            },
            {
                "tipo": "nacional",
                "capacidad": 0,

            },
            {
                "tipo": "redes sociales",
                "redes": ["whatsapp", "office365", "yahoo", "gmail"],

            }
        ]
    }
}

module.exports = planes;