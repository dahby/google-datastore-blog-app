import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  // In development, read the environment variables from .env file
  dotenv.config();
}
