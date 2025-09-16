// Fichier: mangrat-ai.js

// On importe la dC)pendance nC)cessaire. La bibliothC(que Google est maintenant
// une dC)pendance de VOTRE bibliothC(que, et non plus du serveur.
import { GoogleGenerativeAI } from "@google/generative-ai";

// C'est la classe principale que les utilisateurs de votre bibliothC(que vont instancier.
// Elle agit comme le "client".
class MangratAI {
  #googleAI; // PropriC)tC) privC)e pour stocker le client Google AI configurC)
  #model;    // PropriC)tC) privC)e pour stocker le modC(le

  /**
   * Le constructeur est appelC) lors de la crC)ation d'une nouvelle instance.
   * ex: const client = new MangratAI({ apiKey: "..." });
   * @param {object} config - L'objet de configuration.
   * @param {string} config.apiKey - La clC) d'API pour le service d'IA sous-jacent (ici, Gemini).
   */
  constructor(config) {
    if (!config || !config.apiKey) {
      throw new Error("La clC) d'API ('apiKey') est requise lors de l'initialisation.");
    }

    // On initialise le client Google AI C  l'intC)rieur de notre classe.
    // C'est le principe de l'abstraction : l'utilisateur de votre bibliothC(que
    // n'a pas besoin de savoir que vous utilisez Google en arriC(re-plan.
    this.#googleAI = new GoogleGenerativeAI(config.apiKey);
    this.#model = this.#googleAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
  }

  /**
   * La mC)thode principale pour interagir avec l'IA.
   * Elle prend un message simple et retourne la rC)ponse.
   * @param {string} message - Le message de l'utilisateur.
   * @returns {Promise<string>} La rC)ponse textuelle de l'IA.
   */
  async chat(message) {
    if (!message || typeof message !== 'string') {
      throw new Error("Le message doit C*tre une chaC.ne de caractC(res non vide.");
    }

    try {
      const result = await this.#model.generateContent(message);
      const response = await result.response;
      const text = response.text();
      return text || "L'IA n'a pas fourni de rC)ponse.";
    } catch (err) {
      console.error("Erreur dans la bibliothC(que MangratAI:", err.message);
      // On propage une erreur plus gC)nC)rique pour ne pas exposer les dC)tails de l'implC)mentation.
      throw new Error("Une erreur est survenue lors de la communication avec le service d'IA.");
    }
  }

  // C
 l'avenir, vous pourriez ajouter d'autres mC)thodes ici :
  // async summarize(text) { ... }
  // async translate(text, language) { ... }
}

// On exporte la classe pour qu'elle puisse C*tre importC)e dans d'autres fichiers.
export default MangratAI;

