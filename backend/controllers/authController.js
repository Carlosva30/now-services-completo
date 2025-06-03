const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registro
exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, correo, contraseña, tipoUsuario, serviciosOfrecidos } = req.body;

    const usuarioExistente = await Usuario.findOne({ correo });
    if (usuarioExistente) {
      return res.status(400).json({ mensaje: 'Este correo ya está registrado' });
    }

    const salt = await bcrypt.genSalt(10);
    const contraseñaEncriptada = await bcrypt.hash(contraseña, salt);

    const nuevoUsuario = new Usuario({
      nombre,
      correo,
      contraseña: contraseñaEncriptada,
      tipoUsuario,
      serviciosOfrecidos: tipoUsuario === 'experto' ? serviciosOfrecidos : []
    });

    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error registrando usuario:', error);
    res.status(500).json({ mensaje: 'Error al registrar usuario' });
  }
};

// Login
exports.loginUsuario = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    const usuario = await Usuario.findOne({ correo });
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraseñaValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    res.json({
      token,
      usuario: {
        _id: usuario._id, // ✅ CORREGIDO: devolver como _id
        nombre: usuario.nombre,
        correo: usuario.correo,
        tipoUsuario: usuario.tipoUsuario,
        serviciosOfrecidos: usuario.serviciosOfrecidos || []
      },
      tipoUsuario: usuario.tipoUsuario
    });
  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ mensaje: 'Error al iniciar sesión' });
  }
};
