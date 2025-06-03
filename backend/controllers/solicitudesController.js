const mongoose = require('mongoose');
const Solicitud = require('../models/Solicitud');
const Usuario = require('../models/Usuario');

// Crear una nueva solicitud
exports.crearSolicitud = async (req, res) => {
  try {
    console.log('📥 Solicitud recibida en el backend:', req.body);
    const { servicio, descripcion, valorPropuesto, email, expertoId } = req.body;

    // Buscar el ID real del cliente a partir de su correo
    const cliente = await Usuario.findOne({ correo: email });
    if (!cliente) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }

    const nuevaSolicitud = new Solicitud({
      servicio,
      descripcion,
      valorPropuesto,
      email,
      usuario: cliente._id,
      expertoId
    });

    await nuevaSolicitud.save();

    res.status(201).json({
      mensaje: 'Solicitud enviada con éxito 🚀',
      solicitud: nuevaSolicitud
    });
  } catch (error) {
    console.error('❌ Error al crear solicitud:', error);
    res.status(500).json({ mensaje: 'Error al enviar solicitud' });
  }
};

// Obtener solicitudes de un usuario (cliente o experto)
exports.obtenerSolicitudes = async (req, res) => {
  try {
    const { usuarioId, tipo } = req.query;

    let filtro = {};
    if (tipo === 'cliente') {
      filtro.usuario = new mongoose.Types.ObjectId(usuarioId);
    } else if (tipo === 'experto') {
      filtro.expertoId = new mongoose.Types.ObjectId(usuarioId);
    }

    const solicitudes = await Solicitud.find(filtro)
      .sort({ fecha: -1 })
      .populate('usuario expertoId');

    res.json(solicitudes);
  } catch (error) {
    console.error('❌ Error al obtener solicitudes:', error);
    res.status(500).json({ mensaje: 'Error al cargar solicitudes' });
  }
};

// Cambiar el estado de una solicitud
exports.actualizarEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { nuevoEstado } = req.body;

    const solicitud = await Solicitud.findByIdAndUpdate(
      id,
      { estado: nuevoEstado },
      { new: true }
    );

    if (!solicitud) {
      return res.status(404).json({ mensaje: 'Solicitud no encontrada' });
    }

    res.json({ mensaje: 'Estado actualizado ✅', solicitud });
  } catch (error) {
    console.error('❌ Error al actualizar estado:', error);
    res.status(500).json({ mensaje: 'Error al actualizar solicitud' });
  }
};
