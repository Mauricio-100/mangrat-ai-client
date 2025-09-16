# Mangrat AI Client

[![npm version](https://badge.fury.io/js/mangrat-ai-client.svg)](https://badge.fury.io/js/mangrat-ai-client)

Un client SDK simple et lC)ger pour interagir avec des modC(les d'IA, optimisC) pour le service Mangrat V5 et propulsC) par Google Gemini.

## Installation

Installez le paquet en utilisant npm :

```bash
npm install mangrat-ai-client

Utilisation
D'abord, vous devez obtenir une clC) d'API gratuite depuis Google AI Studio. Ensuite, vous pouvez utiliser le client de cette maniC(re :

import MangratAI from 'mangrat-ai-client';

// 1. Configurez le client avec votre clC) d'API
const client = new MangratAI({
  apiKey: "VOTRE_CLE_API_GOOGLE_GEMINI"
});

// 2. CrC)ez une fonction asynchrone pour utiliser la mC)thode .chat()
async function askAI() {
  try {
    console.log("Envoi d'un message C  l'IA...");
    const reply = await client.chat("Quelle est la meilleure fonctionnalitC) de Node.js ?");
    console.log("RC)ponse de l'IA:", reply);
  } catch (error) {
    console.error("Une erreur est survenue:", error.message);
  }
}

// 3. Appelez la fonction
askAI();

// 3. Appelez la fonction
askAI();
API de la BibliothC(que
new MangratAI(config)
CrC)e une nouvelle instance du client MangratAI.

config (Object) : L'objet de configuration.
apiKey (String) [Requis] : Votre clC) d'API Google Gemini.
await client.chat(message)
Envoie un message C  l'IA et retourne la rC)ponse.

message (String) [Requis] : Le prompt ou la question que vous voulez envoyer C  l'IA.
Retourne : Promise<string> - Une promesse qui se rC)sout avec la rC)ponse textuelle de l'IA.
Auteur
mauricioMagic (c) 2025
Licence
ISC
