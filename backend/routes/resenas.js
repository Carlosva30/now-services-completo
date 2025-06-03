const express = require('express');
const router = express.Router();
const {
  crearResena,
  obtenerResenasPorExperto
} = require('../controllers/resenasController');

router.post('/', crearResena);
router.get('/:expertoId', obtenerResenasPorExperto);

module.exports = router;