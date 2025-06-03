require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Rutas del sistema
app.use('/api/auth', require('./routes/auth'));               // Login y registro
app.use('/api/expertos', require('./routes/expertos'));       // Búsqueda y gestión de expertos
app.use('/api/solicitudes', require('./routes/solicitudes')); // Solicitudes entre cliente y experto
app.use('/api/reseñas', require('./routes/reseñas'));         // ruta para reseñas

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
