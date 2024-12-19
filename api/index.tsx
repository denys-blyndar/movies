import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import movies from './routes';

dotenv.config(); // Initialize dotenv

const app = express();
const port: string | number = process.env.PORT || 3000;
const dbURI: string = process.env.DB_URI || '';

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', movies);

// Start Server
const startServer = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURI);
    console.log('Database connected');

    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit on failure
  }
};

startServer();
