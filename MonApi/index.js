/**
 * Ce fichier est pour mon serveur
 */
const express = require("express")
const app = express()

// Il permet de charger sur mon serveur toute les variables contenue dans mon fichier .env
require("dotenv").config()

//j'importe le fichier qui contient mes routes
const adminRouter = require("./routes/admin.router.js")

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Ajout de la route pour le message de démarrage
app.get("/", (req, res) => {
    res.send("Bienvenue sur mon serveur !");
  });
  
app.use("/administrateur", adminRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server en écoute à l\'address http://localhost:' + PORT)
})