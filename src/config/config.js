import dotenv from 'dotenv';

dotenv.config();

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/mydatabase',
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:5173',
    GENAI_API_KEY: process.env.GENAI_API_KEY,
};

export default config;
