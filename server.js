const express = require('express');
const path = require('path');
const app = express();

// Sert les fichiers statiques dans le dossier racine
app.use(express.static(path.join(__dirname)));

// Route explicite pour /version
app.get('/version', (req, res) => {
  res.sendFile(path.join(__dirname, 'version.json'));
});

// Route explicite pour /download (APK)
app.get('/download', (req, res) => {
  res.sendFile(path.join(__dirname, 'app-release.apk'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
