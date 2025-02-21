/**
 * Ce fichier contient les controllers de mon API qui gere le requêtes entrants et determine la reponse à envoyer au client
 */
const pool = require("../database/index.js") //J'importe le fichier qui creer la connection avec ma base de donnée

//Cette fonction contient tout mes contrôller Pour la table administrateur
const adminController = {

    //Controllers pour afficher tous administrateur
    getAll: (req, res) => {
        pool
          .query("SELECT * FROM administrateur") // Correction de la requête SQL
          .then(([rows, fields]) => {
            res.json(rows);
          })
          .catch((error) => {
            console.error(
              "Erreur lors de la récupération des administrateurs:",
              error
            );
            res.status(500).json({ message: "Erreur serveur" });
          });
      },

    //Controllers pour afficher un administrateur
      getById: async (req, res) => {
        try {
          const { id } = req.params;
          const [rows, field] = await pool.query(
            "SELECT * FROM administrateur WHERE id_administrateur = ?", // Correction de la requête SQL
            [id]
          );
          res.json({
            data: rows,
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Erreur serveur" });
        }
      },
      

       //Controllers pour créer un administrateur
      create: async(req, res) => {
        try {
            const {nom, prenom, email, password} =req.body
            const sql = "INSERT INTO administrateur (nom, prenom, email, password) VALUES (?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [nom, prenom, email, password])
            res.json({
                data: rows
            })
        } catch (erreor) {
            console.log(error);
          res.status(500).json({ error: "Erreur serveur" });
        }
      },

       //Controllers pour modifier un administrateur
      update: async (req, res) => {
        try {
            const {nom, prenom, email, password} = req.body
            const {id} = req.params
            const sql ="UPDATE administrateur SET nom = ?, prenom = ?, email = ?, password = ? WHERE id_administrateur = ?"
            const [rows, fields] = await pool.query(sql, [nom, prenom, email, password, id])
            res.json({
                data : rows
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Erreur serveur" }); 
        }
      },

       //Controllers pour supprimer un administrateur
      delete: async (req, res) => {
        try {
            const {id} = req.params
            const [rows, fields] = await pool.query("DELETE  FROM administrateur WHERE id_administrateur = ?", [id])
            res.json({
                data : rows
            })
        } catch (error) {

        }
      }
    
};

//Exporter la variable adminController afin qu'il puisse être utilisé dans d'autres fichiers javascript
module.exports = adminController