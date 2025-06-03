const mongoose = require('mongoose');

const SolicitudSchema = new mongoose.Schema({
  servicio: String,
  descripcion: String,
  valorPropuesto: Number,
  email: String,
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  expertoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  estado: {
    type: String,
    enum: [
      'pendiente',
      'aceptada',
      'rechazada',
      'confirmada_cliente',
      'realizado_experto',
      'completado',
      'cancelado'
    ],
    default: 'pendiente'
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);
