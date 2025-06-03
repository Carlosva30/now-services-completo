const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require('../controllers/authController');
const verificarToken = require('../middleware/verificarToken');

router.post('/registro', registrarUsuario);
router.post('/login', loginUsuario);
// Ruta para obtener los datos del usuario logueado
router.get('/perfil', verificarToken, (req, res) => {
  res.json({ usuario: req.usuario });
});

module.exports = router;
