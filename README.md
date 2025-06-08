#  Now Services – Plataforma de solicitud de servicios

**Now Services** es una aplicación web que conecta clientes con expertos para la contratación de servicios inmediatos. Desde plomería hasta electricidad, pintura y más, esta plataforma facilita el contacto rápido, seguro y eficiente entre quien necesita ayuda y quien tiene la solución.  

Desarrollado por [Carlos Andrés Valencia Flórez](https://www.linkedin.com/in/carlos-valencia-604417206), como parte de su formación en desarrollo y analisis de software.

---

##  Características principales

-  Registro e inicio de sesión para clientes y expertos
-  Búsqueda de expertos por tipo de servicio ofrecido
-  Solicitud de servicios con propuesta de valor
-  Aceptación o rechazo de solicitudes por parte del experto
-  Seguimiento del estado del servicio (pendiente, aceptado, realizado, completado)
-  Historial de servicios tanto para cliente como para experto

---

##  Tecnologías utilizadas

### Frontend
- React.js
- Axios
- Vite
- Tailwind CSS (o estilos CSS propios)

### Backend
- Node.js
- Express
- MongoDB + Mongoose
- JWT para autenticación
- Dotenv para manejo de variables de entorno

---

## ⚙️ Instalación y ejecución local

### 1. Clona el repositorio
```bash
git clone https://github.com/Carlosva30/now-services-completo.git
cd now-services-completo
```

### 2. Backend
```bash
cd backend
npm install
npm run dev
```
**Requiere archivo `.env` con:**
```env
PORT=5000
MONGODB_URI=tu_uri_de_mongodb
JWT_SECRET=tu_clave_secreta
```

### 3. Frontend
```bash
cd ../frontend
npm install
npm run dev
```

La app estará corriendo en `http://localhost:3000` y el backend en `http://localhost:5000`.

---

##  Despliegue

 Puedes ver la app en producción aquí:  
**Frontend**: [https://nowservices.vercel.app](https://nowservices.vercel.app)  
**Backend**: [https://nowservices-api.onrender.com](https://nowservices-api.onrender.com)

---

## 📌 Estado del proyecto

 MVP funcional completado  
 Próximamente: integración de pagos, chat en tiempo real y valoración de expertos

---

## 👨‍💻 Autor

**Carlos Andrés Valencia Flórez**  
 Cali, Colombia  
 carlosva300592@gmail.com  
 +57 304 6146924  

---

##  Agradecimientos

A mis instructores, compañeros de formación y todas las personas que me han motivado a seguir creciendo como desarrollador.
