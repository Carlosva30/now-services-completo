const Usuario = require('../models/Usuario');

const buscarExpertos = async (req, res) => {
  const { q } = req.query;

  try {
    const regex = new RegExp(q, 'i');

    const expertos = await Usuario.find({
      tipoUsuario: 'experto',
      $or: [
        { nombre: regex },
        { correo: regex }
      ]
    });

    res.json({ expertos });
  } catch (error) {
    console.error('❌ Error buscando expertos:', error);
    res.status(500).json({ mensaje: 'Error al buscar expertos' });
  }
};

module.exports = { buscarExpertos };