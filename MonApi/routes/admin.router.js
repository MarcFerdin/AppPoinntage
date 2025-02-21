/**
 * Ce fichier contient toutes les routes de mon API qui permettent de spécifier quelles actions doivent être exécutées en fonctionde l'URL 
 */
const express = require("express")
const router = express.Router()

const adminController = require("../controllers/admin.controller.js") //Import de la fonction adminControler d'ou se trouve les controleurs

router.get("/", adminController.getAll) //Route pour afficher tout les administrateurs enregistrer
router.get("/:id", adminController.getById) //Route pour afficher un seul administrateur selon son id
router.post("/", adminController.create) //Route pour créer un nouvel administrateur
router.put("/:id", adminController.update) //Route pour modifier un administrateur selon son id
router.delete("/:id", adminController.delete) //Route pour supprimer un administrateur selon son id

//Exporter la variable router afin qu'il puisse être utilisé dans d'autres fichiers javascript
module.exports = router
