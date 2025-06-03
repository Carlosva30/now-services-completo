require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error de conexión a MongoDB:', err));

// Rutas del sistema
const authRoutes = require('./routes/auth');
const expertosRoutes = require('./routes/expertos');
const solicitudesRoutes = require('./routes/solicitudes');
const resenasRoutes = require('./routes/resenas'); // Importar con nombre correcto

app.use('/api/auth', authRoutes);
app.use('/api/expertos', expertosRoutes);
app.use('/api/solicitudes', solicitudesRoutes);
app.use('/api/resenas', resenasRoutes); // Usar sin ñ para compatibilidad

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
