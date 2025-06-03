const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario');

// Buscar expertos por nombre, zona o servicios ofrecidos
router.get('/', async (req, res) => {
  try {
    const query = req.query.q?.toLowerCase() || '';

    const expertos = await Usuario.find({
      tipoUsuario: 'experto',
      $or: [
        { nombre: new RegExp(query, 'i') },
        { zona: new RegExp(query, 'i') },
        { serviciosOfrecidos: { $elemMatch: { $regex: query, $options: 'i' } } } //  Búsqueda por servicio
      ]
    });

    res.json({ expertos });
  } catch (error) {
    console.error('Error al buscar expertos:', error);
    res.status(500).json({ mensaje: 'Error al buscar expertos' });
  }
});

module.exports = router;
