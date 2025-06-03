const Reseña = require('../models/Resena');

const crearResena = async (req, res) => {
  try {
    const nuevaResena = new Reseña(req.body);
    await nuevaResena.save();
    res.status(201).json(nuevaResena);
  } catch (error) {
    console.error('❌ Error al crear reseña:', error);
    res.status(500).json({ error: 'Error al crear reseña' });
  }
};

const obtenerResenasPorExperto = async (req, res) => {
  const { expertoId } = req.params;
  try {
    const resenas = await Reseña.find({ expertoId });
    res.json(resenas);
  } catch (error) {
    console.error('❌ Error al obtener reseñas:', error);
    res.status(500).json({ error: 'Error al obtener reseñas' });
  }
};

module.exports = {
  crearResena,
  obtenerResenasPorExperto
};
