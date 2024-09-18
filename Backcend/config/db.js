import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'sql7.freesqldatabase.com',
    user: 'sql7731950',
    password: '4ZCs62V2Sw',
    database: 'sql7731950',
    port: 3306
});

export default pool;
