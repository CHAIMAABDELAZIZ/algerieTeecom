const mysql = require('mysql2');

// Créer un pool de connexions à la base de données
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'AlgerieTelecom',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Obtenir une connexion du pool
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Erreur de connexion :', err);
        return;
    }
    console.log('Connecté avec succès');
    // Libérer la connexion après utilisation
    connection.release();
});

// Exporter le pool pour utilisation dans d'autres modules
module.exports = pool.promise();
