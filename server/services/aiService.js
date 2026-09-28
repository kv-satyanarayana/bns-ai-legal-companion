import { config } from '../config/default.js';
import { mockAiProvider } from './ai/mockAiProvider.js';

class AiService {
  constructor() {
    this.providers = {
      mock: mockAiProvider
      // Future providers will be registered here:
      // ollama: new OllamaAiProvider(),
      // rag: new RagAiProvider()
    };
  }

  getProvider() {
    const providerName = config.aiProvider || 'mock';
    const provider = this.providers[providerName];
    if (!provider) {
      console.warn(`AI Provider '${providerName}' not found. Falling back to 'mock'.`);
      return this.providers.mock;
    }
    return provider;
  }

  async analyzeLegalProblem(query) {
    const provider = this.getProvider();
    return await provider.analyzeLegalProblem(query);
  }
}

export const aiService = new AiService();
