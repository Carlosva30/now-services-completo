const mongoose = require('mongoose');

const expertoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  servicio: { type: String, required: true },
  zona: { type: String },
  contacto: { type: String },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' }
});

module.exports = mongoose.model('Experto', expertoSchema);