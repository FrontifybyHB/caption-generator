import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';


// Import Config
import config from './config/config.js';

// Import Routes
import captionRoutes from './routes/caption.routes.js';

// Import Middleware
import { errorHandler } from './middlewares/error.handler.js';
import { apiLimiter } from "./middlewares/ratelimit.middleware.js";


// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(morgan('dev'));
app.use(apiLimiter);


// Routes
app.use('/api/caption', captionRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'EMS Backend is running' });
});

// Error handling
app.use(errorHandler);



export default app;