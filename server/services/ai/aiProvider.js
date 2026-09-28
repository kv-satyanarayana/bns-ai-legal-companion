/**
 * Abstract AI Provider Interface
 * Allows swapping Mock AI with Ollama / Indian Legal Llama 3.2 3B + RAG
 * without affecting controllers or frontend contracts.
 */
export class AiProvider {
  /**
   * Analyzes a natural language legal problem query and returns structured legal assessment.
   * @param {string} query - Natural language grievance description
   * @returns {Promise<Object>} Structured analysis response
   */
  async analyzeLegalProblem(query) {
    throw new Error('Method analyzeLegalProblem(query) must be implemented by subclass.');
  }
}
