const Reseña = require('../models/Reseña');

exports.crearReseña = async (req, res) => {
  try {
    const { clienteId, expertoId, comentario, calificacion, solicitudId } = req.body;

    const nuevaReseña = new Reseña({
      clienteId,
      expertoId,
      comentario,
      calificacion,
      solicitudId,
      fecha: new Date(),
    });

    await nuevaReseña.save();
    res.status(201).json(nuevaReseña);
  } catch (error) {
    console.error('❌ Error al crear reseña:', error);
    res.status(500).json({ mensaje: 'Error al crear reseña' });
  }
};

exports.obtenerReseñasPorExperto = async (req, res) => {
  try {
    const { expertoId } = req.params;
    const reseñas = await Reseña.find({ expertoId }).populate('clienteId', 'nombre correo');
    res.json(reseñas);
  } catch (error) {
    console.error('❌ Error al obtener reseñas:', error);
    res.status(500).json({ mensaje: 'Error al obtener reseñas' });
  }
};
