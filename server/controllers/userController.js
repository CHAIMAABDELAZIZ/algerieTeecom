import { addUser, getUserById, updateUser, deleteUser } from '../models/userModel.js';
import pool from '../config/db.js';

export const createUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const result = await addUser(username, password, role);
        res.status(201).json({ message: "Utilisateur créé", id: result.insertId });
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error); // Affiche l'erreur dans la console
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error: error.message });
    }
};


export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur", error });
    }
};

export const updateUserDetails = async (req, res) => {
    const { id } = req.params;
    const { username, password, role } = req.body;
    try {
        await updateUser(id, username, password, role);
        res.json({ message: "Utilisateur mis à jour" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la mise à jour", error });
    }
};

export const deleteUserById = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUser(id);
        res.json({ message: "Utilisateur supprimé" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression", error });
    }
};

export const getUserByUsername = async (username) => {
    const query = `SELECT * FROM Users WHERE username = ?`;
    const [rows] = await pool.query(query, [username]);
    return rows[0];
};