import { config } from '../config/default.js';

export const getHealth = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'BNS AI Legal Companion API',
    version: '1.0.0',
    mode: 'MOCK_PHASE',
    aiProvider: config.aiProvider,
    uptime: process.uptime()
  });
};
