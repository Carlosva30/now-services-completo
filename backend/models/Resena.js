const mongoose = require('mongoose');

const resenaSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  expertoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Experto', required: true },
  solicitudId: { type: mongoose.Schema.Types.ObjectId, ref: 'Solicitud' },
  comentario: { type: String, required: true },
  calificacion: { type: Number, min: 1, max: 5, required: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resena', resenaSchema);
