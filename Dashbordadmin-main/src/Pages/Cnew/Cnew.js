import "./Cnew.css";
import { useState } from "react";
import Csidemenu from "../../components/Csidemenu"
import Cnavbar from "../../components/Cnavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cnew = () => {
    const [nom, setUserName] = useState('');
    const [prenom, setUserPrenom] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // État pour les messages de succès
    

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handleUserPrenomChange = (e) => {
        setUserPrenom(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

  

   
        

     
   

    const checkUsernameExists = async (nom) => {
        try {
            const response = await fetch(`http://localhost:8082/adposts/check-nom?nom=${nom}`);
            if (response.ok) {
                const data = await response.json();
                return data.exists;
            } else {
                throw new Error("Erreur lors de la vérification du nom d'utilisateur.");
            }
        } catch (error) {
            console.error("Erreur lors de la vérification du nom d'utilisateur:", error);
            setError("Une erreur est survenue lors de la vérification du nom d'utilisateur.");
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier si le nom d'utilisateur existe déjà
        const usernameExists = await checkUsernameExists(nom);
        if (usernameExists) {
            setError("Le nom d'utilisateur existe déjà, veuillez en choisir un autre.");
            return; // Arrêter l'exécution si le nom d'utilisateur est déjà pris
        }

        const user = { nom, password };

        try {
            const response = await fetch('http://localhost:8082/adposts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                setSuccess('Utilisateur ajouté avec succès');
                setError(''); // Réinitialiser les messages d'erreur en cas de succès
                // Vous pouvez rediriger l'utilisateur vers une autre page après l'inscription
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Échec de l\'ajout');
                setSuccess(''); // Réinitialiser les messages de succès en cas d'erreur
            }
        } catch (error) {
            setError('Une erreur est survenue. Veuillez réessayer.');
            console.error('Erreur lors de l\'ajout:', error);
        }
    };




    return (
        <div className="new">
            <Csidemenu />
            <div className="newContainer">
                <Cnavbar />
                <div className="top">
                    <h1>AJOUTER UN NOUVEAU UTILISATEURS </h1>
                </div>
                <div className="bottom">

                  
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                           
                            <div className="formInput">
                                <label htmlFor="UserName">Nom :</label>
                                <input
                                    type="text"
                                    id="UserName"
                                    value={nom}
                                    onChange={handleUserNameChange}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="userPrenom">Prenom :</label>
                                <input
                                    type="text"
                                    id="userPrenom"
                                    value={prenom}
                                    onChange={handleUserPrenomChange}
                                />
                            </div>


                        
                            <div className="formInput">
                                <label htmlFor="Email">Role</label>
                                <input
                                    type="text"
                                    id="Email"
                                    value={role}
                                    onChange={handleRoleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="text"
                                    id="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">{success}</p>}
                            <button>SEND</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cnew;