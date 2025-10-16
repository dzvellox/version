const express = require('express');
const path = require('path');
const app = express();

// Sert les fichiers statiques (APK, JSON)
app.use('/downloads', express.static(path.join(__dirname, 'public')));

// Route pour la version
app.get('/version', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/version.json'));
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
