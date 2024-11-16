const express = require("express");
const path = require("path");

const app = express();

// Dossier statique de l'application Angular
app.use(express.static(path.join(__dirname, "dist/gestion-personnel-spa")));

// Rediriger toutes les requêtes non trouvées vers Angular
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/gestion-personnel-spa/index.html"));
});

// Démarrer l'application sur le port défini par Heroku ou 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
