// Fichier : mangrat-ai.js (Version Pro)

import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Le client principal pour interagir avec l'API MangratAI.
 * @class MangratAI
 */
class MangratAI {
  #googleAI;
  #model;

  /**
   * Crée une instance de MangratAI.
   * @param {object} config - L'objet de configuration.
   * @param {string} config.apiKey - Votre clé d'API Google Gemini.
   * @param {string} [config.modelName='gemini-1.5-flash-latest'] - (Optionnel) Le nom du modèle à utiliser.
   * @throws {Error} Si la clé d'API est manquante.
   */
  constructor(config) {
    if (!config || !config.apiKey) {
      throw new Error("La clé d'API ('apiKey') est requise lors de l'initialisation.");
    }

    this.#googleAI = new GoogleGenerativeAI(config.apiKey);
    
    // Utilise le modèle fourni ou le modèle par défaut.
    const modelToUse = config.modelName || 'gemini-1.5-flash-latest';
    this.#model = this.#googleAI.getGenerativeModel({ model: modelToUse });
  }

  /**
   * Envoie un prompt à l'IA et retourne la réponse textuelle.
   * @param {string} message - Le message à envoyer à l'IA.
   * @returns {Promise<string>} Une promesse qui se résout avec la réponse de l'IA.
   * @throws {Error} Si le message n'est pas une chaîne de caractères valide ou si l'API échoue.
   */
  async chat(message) {
    if (!message || typeof message !== 'string') {
      throw new Error("Le message doit être une chaîne de caractères non vide.");
    }

    try {
      const result = await this.#model.generateContent(message);
      const response = await result.response;
      const text = response.text();
      return text || "L'IA n'a pas fourni de réponse.";
    } catch (err) {
      console.error("Erreur détaillée dans la bibliothèque MangratAI:", err.message);
      throw new Error("Une erreur est survenue lors de la communication avec le service d'IA de Google.");
    }
  }
}

export default MangratAI;
