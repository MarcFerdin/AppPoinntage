//Ici on importe le module mysql2 qui nous permet de se connecter et d'interagire avec le SGBD mysql
const mysql = require("mysql2")

/**
 * Ici on configure un pool de connexions à une base de données MySQL à l'aide de la bibliothèque mysql 
 * Un pool de connexions est un ensemble de connexions de base de données pré-établies et prêtes à être utilisées. 
 */
const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DBNAME
}) 


//Exporter la fonction pool afin qu'il puisse être utilisé dans d'autres fichiers javascript
module.exports = pool.promise()