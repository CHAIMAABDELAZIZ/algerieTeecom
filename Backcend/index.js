import express from 'express';
import cors from 'cors';
import UsersRouter from './routers/userRouter.js';
import createUserTable from './models/userModel.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/', UsersRouter);

// Création de la table si elle n'existe pas déjà
createUserTable();

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
