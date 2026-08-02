const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/elarion';

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    console.warn('Starting server without database connection. Set MONGODB_URI in backend/.env for full persistence.');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
