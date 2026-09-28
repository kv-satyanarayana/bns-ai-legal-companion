import { aiService } from '../services/aiService.js';
import { legalDataService } from '../services/legalDataService.js';

export const analyzeLegalProblem = async (req, res, next) => {
  try {
    const { query } = req.body;

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: {
          message: 'Please provide a valid natural-language query describing the legal problem.'
        }
      });
    }

    const analysisResult = await aiService.analyzeLegalProblem(query.trim());

    res.status(200).json({
      success: true,
      data: analysisResult
    });
  } catch (err) {
    next(err);
  }
};

export const searchLegalData = (req, res, next) => {
  try {
    const { q = '', act = 'ALL' } = req.query;
    const results = legalDataService.search({ query: q, act });

    res.status(200).json({
      success: true,
      query: q,
      actFilter: act,
      total: results.length,
      data: results
    });
  } catch (err) {
    next(err);
  }
};

export const getBnsSections = (req, res, next) => {
  try {
    const sections = legalDataService.getAllBnsSections();
    res.status(200).json({
      success: true,
      total: sections.length,
      data: sections
    });
  } catch (err) {
    next(err);
  }
};

export const getBnsSectionDetails = (req, res, next) => {
  try {
    const { section } = req.params;
    const sectionData = legalDataService.getBnsSection(section);

    if (!sectionData) {
      return res.status(404).json({
        success: false,
        error: {
          message: `BNS Section '${section}' not found in current mock dataset.`
        }
      });
    }

    res.status(200).json({
      success: true,
      data: sectionData
    });
  } catch (err) {
    next(err);
  }
};

export const getCases = (req, res, next) => {
  try {
    const cases = legalDataService.getAllCases();
    res.status(200).json({
      success: true,
      total: cases.length,
      data: cases
    });
  } catch (err) {
    next(err);
  }
};
