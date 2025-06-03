const express = require('express');
const router = express.Router();
const {
  crearSolicitud,
  obtenerSolicitudes,
  actualizarEstado
} = require('../controllers/solicitudesController');

// Ruta para crear una nueva solicitud
router.post('/', crearSolicitud);

// Ruta para obtener solicitudes (cliente o experto según query)
router.get('/', obtenerSolicitudes);

// Ruta para actualizar el estado de una solicitud
router.put('/:id/estado', actualizarEstado);

module.exports = router;
