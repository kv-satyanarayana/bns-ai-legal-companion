import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { config } from './config/default.js';
import healthRoutes from './routes/healthRoutes.js';
import legalRoutes from './routes/legalRoutes.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();

// Global Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// API Routes
app.use('/api', healthRoutes);
app.use('/api', legalRoutes);

// Root Endpoint info
app.get('/', (req, res) => {
  res.json({
    message: 'BNS AI Legal Companion API Server',
    version: '1.0.0',
    mode: 'MOCK_PHASE',
    endpoints: {
      health: '/api/health',
      analyze: 'POST /api/legal/analyze',
      search: 'GET /api/legal/search?q=...&act=ALL|BNS|BNSS|BSA|IT-ACT|CASES',
      bnsSections: 'GET /api/legal/sections',
      bnsSectionDetail: 'GET /api/legal/sections/:section',
      cases: 'GET /api/legal/cases'
    }
  });
});

// 404 & Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
const PORT = config.port;
const server = app.listen(PORT, () => {
  console.log(`=========================================`);
  console.log(`⚖️  BNS AI Legal Companion API Server`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🔬 AI Provider Mode: ${config.aiProvider.toUpperCase()}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`=========================================`);
});

export default app;
