import pool from '../config/db.js';
import bcrypt from 'bcrypt';

const createUserTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(20) UNIQUE,
            password VARCHAR(100),
            role ENUM('user', 'admin') DEFAULT 'user'
        );
    `;
    await pool.query(query);
};

export const addUser = async (username, password, role) => {
    const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe
    const query = `INSERT INTO Users (username, password, role) VALUES (?, ?, ?)`;
    const [result] = await pool.query(query, [username, hashedPassword, role]);
    return result;
};

export const getUserById = async (id) => {
    const query = `SELECT * FROM Users WHERE id = ?`;
    const [rows] = await pool.query(query, [id]);
    return rows[0];
};

export const updateUser = async (id, username, password, role) => {
    const query = `UPDATE Users SET username = ?, password = ?, role = ? WHERE id = ?`;
    const [result] = await pool.query(query, [username, password, role, id]);
    return result;
};

export const deleteUser = async (id) => {
    const query = `DELETE FROM Users WHERE id = ?`;
    const [result] = await pool.query(query, [id]);
    return result;
};

export default createUserTable;
