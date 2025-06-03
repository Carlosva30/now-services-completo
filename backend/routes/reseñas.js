const express = require('express');
const router = express.Router();
const reseñasController = require('../controllers/reseñasController');

// Crear una nueva reseña
router.post('/', reseñasController.crearReseña);

// Obtener reseñas por experto
router.get('/:expertoId', reseñasController.obtenerReseñasPorExperto);

module.exports = router;
