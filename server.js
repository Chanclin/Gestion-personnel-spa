const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Servir les fichiers statiques depuis `dist`
app.use(express.static(path.join(__dirname, 'dist/gestion-personnel-spa')));

// Rediriger toutes les routes Angular vers `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/gestion-personnel-spa/index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
