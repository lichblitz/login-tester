module.exports = {
    "TIME": {
        "success": {
            "status": 200,
            "perfil": "A",
            "nit": "900800700-1",
            "nombre_empresa": "Movistar TIME"
        },
        "failed_500": {
            "status": 500,
            "message": "El servicio se encuentra fuera de linea"
        },
        "failed_404": {
            "status": 404,
            "message": "Usuario incorrecto o inexistente"
        },
        "failed_401": {
            "status": 401,
            "message": "Clave bloqueada"
        }
    },
    "IVR": {
        "success": {
            "status": 200,
            "perfil": "B",
            "nit": "900800700-1",
            "nombre_empresa": "Movistar SELU"
        },
        "failed_500": {
            "status": 500,
            "message": "El servicio se encuentra fuera de linea"
        },
        "failed_404": {
            "status": 404,
            "message": "Usuario incorrecto o inexistente"
        },
        "failed_401": {
            "status": 401,
            "message": "Clave bloqueada"
        }
    }
}
