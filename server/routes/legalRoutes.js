import express from 'express';
import {
  analyzeLegalProblem,
  searchLegalData,
  getBnsSections,
  getBnsSectionDetails,
  getCases
} from '../controllers/legalController.js';

const router = express.Router();

// Citizen Assistant: Natural-language problem analysis
router.post('/legal/analyze', analyzeLegalProblem);

// Legal Research: Multimodal legal search across statutes and cases
router.get('/legal/search', searchLegalData);

// BNS Explorer: All BNS sections
router.get('/legal/sections', getBnsSections);

// BNS Explorer: Specific section details
router.get('/legal/sections/:section', getBnsSectionDetails);

// Case Law Precedents
router.get('/legal/cases', getCases);

export default router;
