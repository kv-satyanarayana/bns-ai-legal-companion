/**
 * Centralized API client for BNS AI Legal Companion
 * Communicates with the Express backend via proxy or environment base URL.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  try {
    const response = await fetch(url, { ...options, headers });
    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data?.error?.message || `Request failed with status ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  } catch (err) {
    if (err.name === 'TypeError' && err.message.includes('fetch')) {
      throw new Error('Legal service is temporarily unavailable. Please verify the backend server is running.');
    }
    throw err;
  }
}

export const api = {
  /**
   * Submits a natural-language legal grievance for structured classification & source mapping.
   * @param {string} query
   */
  async analyzeLegalProblem(query) {
    return request('/api/legal/analyze', {
      method: 'POST',
      body: JSON.stringify({ query })
    });
  },

  /**
   * Searches statutory sections and judicial precedents.
   * @param {string} query
   * @param {string} act - 'ALL' | 'BNS' | 'BNSS' | 'BSA' | 'IT-ACT' | 'CASES'
   */
  async searchLegal(query = '', act = 'ALL') {
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (act) params.append('act', act);
    return request(`/api/legal/search?${params.toString()}`);
  },

  /**
   * Fetches all BNS sections.
   */
  async getBnsSections() {
    return request('/api/legal/sections');
  },

  /**
   * Fetches detailed information for a specific BNS section.
   * @param {string|number} section
   */
  async getBnsSectionDetails(section) {
    return request(`/api/legal/sections/${encodeURIComponent(section)}`);
  },

  /**
   * Fetches judicial case precedents.
   */
  async getCases() {
    return request('/api/legal/cases');
  },

  /**
   * Checks API health status and current AI Provider mode.
   */
  async checkHealth() {
    return request('/api/health');
  }
};
