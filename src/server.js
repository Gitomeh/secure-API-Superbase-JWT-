// Main Express server with Swagger UI documentation
const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = require('./config/supabase');
const authRoutes = require('./routes/auth');
const publicRoutes = require('./routes/public');
const protectedRoutes = require('./routes/protected');
const swaggerDocument = require('./swagger/openapi.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running', status: 'healthy' });
});

app.use('/auth', authRoutes);
app.use('/public', publicRoutes);
app.use('/protected', protectedRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/docs`);
});