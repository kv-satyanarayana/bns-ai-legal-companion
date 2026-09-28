import fs from 'fs';
import { config } from '../config/default.js';

class LegalDataService {
  constructor() {
    this.bnsData = [];
    this.bnssData = [];
    this.bsaData = [];
    this.itActData = [];
    this.casesData = [];
    this.isLoaded = false;
  }

  loadData() {
    try {
      if (fs.existsSync(config.dataPaths.bns)) {
        this.bnsData = JSON.parse(fs.readFileSync(config.dataPaths.bns, 'utf-8'));
      }
      if (fs.existsSync(config.dataPaths.bnss)) {
        this.bnssData = JSON.parse(fs.readFileSync(config.dataPaths.bnss, 'utf-8'));
      }
      if (fs.existsSync(config.dataPaths.bsa)) {
        this.bsaData = JSON.parse(fs.readFileSync(config.dataPaths.bsa, 'utf-8'));
      }
      if (fs.existsSync(config.dataPaths.itAct)) {
        this.itActData = JSON.parse(fs.readFileSync(config.dataPaths.itAct, 'utf-8'));
      }
      if (fs.existsSync(config.dataPaths.cases)) {
        this.casesData = JSON.parse(fs.readFileSync(config.dataPaths.cases, 'utf-8'));
      }
      this.isLoaded = true;
    } catch (err) {
      console.error('Error loading legal mock datasets:', err);
      this.isLoaded = false;
    }
  }

  ensureLoaded() {
    if (!this.isLoaded) {
      this.loadData();
    }
  }

  getAllBnsSections() {
    this.ensureLoaded();
    return this.bnsData;
  }

  getBnsSection(sectionNum) {
    this.ensureLoaded();
    const cleanNum = String(sectionNum).trim().toLowerCase();
    return this.bnsData.find(item => String(item.section).toLowerCase() === cleanNum) || null;
  }

  getAllCases() {
    this.ensureLoaded();
    return this.casesData;
  }

  search({ query = '', act = 'ALL' }) {
    this.ensureLoaded();
    const q = query.trim().toLowerCase();
    const actFilter = act.toUpperCase();

    let pool = [];

    if (actFilter === 'ALL' || actFilter === 'BNS') {
      pool = pool.concat(this.bnsData.map(d => ({ ...d, itemType: 'STATUTE' })));
    }
    if (actFilter === 'ALL' || actFilter === 'BNSS') {
      pool = pool.concat(this.bnssData.map(d => ({ ...d, itemType: 'STATUTE' })));
    }
    if (actFilter === 'ALL' || actFilter === 'BSA') {
      pool = pool.concat(this.bsaData.map(d => ({ ...d, itemType: 'STATUTE' })));
    }
    if (actFilter === 'ALL' || actFilter === 'IT ACT' || actFilter === 'IT-ACT' || actFilter === 'ITACT') {
      pool = pool.concat(this.itActData.map(d => ({ ...d, itemType: 'STATUTE' })));
    }
    if (actFilter === 'ALL' || actFilter === 'CASES' || actFilter === 'CASE LAW') {
      pool = pool.concat(this.casesData.map(d => ({ ...d, itemType: 'CASE' })));
    }

    if (!q) {
      return pool;
    }

    return pool.filter(item => {
      if (item.itemType === 'CASE') {
        const matchName = item.caseName?.toLowerCase().includes(q);
        const matchIssue = item.legalIssue?.toLowerCase().includes(q);
        const matchSummary = item.summary?.toLowerCase().includes(q);
        const matchReasoning = item.courtReasoning?.toLowerCase().includes(q);
        const matchSections = item.applicableSections?.some(s => s.toLowerCase().includes(q));
        return matchName || matchIssue || matchSummary || matchReasoning || matchSections;
      } else {
        const matchSection = String(item.section).toLowerCase().includes(q);
        const matchTitle = item.title?.toLowerCase().includes(q);
        const matchSummary = item.summary?.toLowerCase().includes(q);
        const matchPlain = item.plainExplanation?.toLowerCase().includes(q);
        const matchIpc = item.ipcEquivalent?.toLowerCase().includes(q);
        const matchKeywords = item.keywords?.some(k => k.toLowerCase().includes(q));
        return matchSection || matchTitle || matchSummary || matchPlain || matchIpc || matchKeywords;
      }
    });
  }
}

export const legalDataService = new LegalDataService();
