const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  tipoUsuario: { type: String, enum: ['cliente', 'experto'], required: true },
  serviciosOfrecidos: {
    type: [String],
    default: [],
    required: function () {
      return this.tipoUsuario === 'experto';
    }
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
