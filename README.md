<p align="center">
  <img src="./assets/logo.png" alt="Mangrat AI Logo" width="150"/>
</p>


<h1 align="center">Mangrat AI Client</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/mangrat-ai-client"><img src="https://badge.fury.io/js/mangrat-ai-client.svg" alt="NPM Version"></a> <a href="https://github.com/Mauricio-100/mangrat-ai-client/actions/workflows/publish.yml"><img src="https://github.com/Mauricio-100/mangrat-ai-client/actions/workflows/publish.yml/badge.svg" alt="CI/CD Status"></a> <a href="https://www.npmjs.com/package/mangrat-ai-client"><img src="https://img.shields.io/npm/dm/mangrat-ai-client.svg" alt="NPM Downloads"></a> <a href="https://github.com/Mauricio-100/mangrat-ai-client/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-ISC-blue.svg" alt="License"></a>
</p>

Un SDK JavaScript simple et léger pour interagir avec les modèles d'IA Gemini de Google directement depuis votre application Node.js.

---

## Fonctionnalités

* ✅ Interface simple et intuitive avec la méthode `chat()`.
* ✅ Léger et sans dépendances inutiles.
* ✅ Prise en charge de tous les modèles Gemini disponibles via l'API.
* ✅ Modèle par défaut (`gemini-1.5-flash-latest`) pour un démarrage rapide.

---

## Installation

Installez le package en utilisant npm :

```bash
npm install mangrat-ai-client

Utilisation
Usage Simple
Voici un exemple de base utilisant le modèle par défaut (gemini-1.5-flash-latest).
const MangratAI = require('mangrat-ai-client');

async function main() {
  // Initialisez le client avec votre clé API
  const client = new MangratAI({
    apiKey: 'VOTRE_CLE_API_GOOGLE_GEMINI'
  });

  // Envoyez un message et attendez la réponse
  const reponse = await client.chat("Bonjour, qui es-tu ?");
  console.log(reponse);
}

main();

Usage Avancé (Choisir un modèle)
Vous pouvez facilement spécifier un modèle différent, comme gemini-1.5-pro-latest, lors de l'initialisation du client.
const MangratAI = require('mangrat-ai-client');

async function main() {
  // Spécifiez un modèle plus puissant lors de l'initialisation
  const client = new MangratAI({
    apiKey: 'VOTRE_CLE_API_GOOGLE_GEMINI',
    modelName: 'gemini-1.5-pro-latest' // ou un autre modèle de votre choix
  });

  const reponse = await client.chat("Explique la relativité générale en termes simples.");
  console.log(reponse);
}

main();
/
```

### API

new MangratAI(config)
Crée une nouvelle instance du client Mangrat AI.
 * config (objet) : L'objet de configuration.
   * apiKey (string, requis) : Votre clé API Google Gemini.
   * modelName (string, optionnel) : Le nom du modèle à utiliser. La valeur par défaut est "gemini-1.5-flash-latest".
client.chat(message)
Envoie un message (prompt) au modèle Gemini et retourne sa réponse.
 * message (string, requis) : Le prompt à envoyer au modèle.
 * Retourne : Promise<string> - Une promesse qui se résout avec la réponse textuelle de l'IA.
### Contribuer
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue pour signaler un bug ou proposer une nouvelle fonctionnalité.
### Licence
Ce projet est sous licence ISC.

