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
app.use('/api/auth', require('./routes/auth'));
app.use('/api/expertos', require('./routes/expertos'));
app.use('/api/solicitudes', require('./routes/solicitudes'));
app.use('/api/resenas', require('./routes/resenas')); // ✅ ya corregido y consistente

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
