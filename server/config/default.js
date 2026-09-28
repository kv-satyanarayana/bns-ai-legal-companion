import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

export const config = {
  port: process.env.PORT || 5000,
  env: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  dataPaths: {
    bns: path.join(rootDir, 'data/bns/bns.mock.json'),
    bnss: path.join(rootDir, 'data/bnss/bnss.mock.json'),
    bsa: path.join(rootDir, 'data/bsa/bsa.mock.json'),
    itAct: path.join(rootDir, 'data/it-act/it-act.mock.json'),
    cases: path.join(rootDir, 'data/cases/cases.mock.json')
  },
  aiProvider: process.env.AI_PROVIDER || 'mock'
};
