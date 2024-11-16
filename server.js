const express = require("express");
const path = require("path");

const app = express();

// Modifiez le chemin pour pointer vers dist/gestion-personnel-spa/browser
app.use(express.static(path.join(__dirname, "dist/gestion-personnel-spa/browser")));

// Redirige toutes les requêtes vers index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/gestion-personnel-spa/browser/index.html"));
});

// Démarre le serveur sur le port Heroku ou 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
