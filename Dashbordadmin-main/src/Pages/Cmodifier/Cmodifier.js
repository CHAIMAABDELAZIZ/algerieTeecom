import Cnavbar from "../../components/Cnavbar";
import CsideMenu from "../../components/Csidemenu";
import "./Cmodifier.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";


const Cmodifier = () => {
    const [userName, setUserName] = useState('');
    const [userPrenom, setUserPrenom] = useState('');
    const [selectedWilaya, setSelectedWilaya] = useState('');
    const [Email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };
    const handleUserPrenomChange = (e) => {
        setUserPrenom(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const wilayas = [
        'Adrar',
        'Chlef',
        'Laghouat',
        'Oum El Bouaghi',
        'Batna',
        'Béjaïa',
        'Biskra',
        'Béchar',
        'Blida',
        'Bouira',
        'Tamanrasset',
        // Add more wilayas as needed
    ];
    const [file, setFile] = useState("");

    const handleWilayaChange = (e) => {
        setSelectedWilaya(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform your desired action with the form data
        console.log('User Name:', userName);
        console.log(' User Prenom:', userPrenom);
        console.log('Email:', Email);
        console.log('Password:', password);
        console.log('Wilaya:', selectedWilaya);

        // Reset form fields
        setUserName('');
        setUserPrenom('');
        setEmail('');
        setPassword('');

        setSelectedWilaya('');


    };




    return (
        <div className="new">
            <CsideMenu />
            <div className="newContainer">
                <Cnavbar />
                <div className="top">
                    <h1>AJOUTER UN NOUVEAU LIEU </h1>
                </div>
                <div className="bottom">

                    <div className="left">
                        <img
                            src={file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    image : <DriveFolderUploadOutlinedIcon className="icon" />
                                </label>

                                <input
                                    type="file"
                                    id="file"
                                    onChange={(e) => setFile(e.target.files[0])}
                                    style={{ display: "none" }}
                                />

                            </div>
                            <div className="formInput">
                                <label htmlFor="UserName">User Name:</label>
                                <input
                                    type="text"
                                    id="UserName"
                                    value={userName}
                                    onChange={handleUserNameChange}
                                />
                            </div>
                            <div className="formInput">
                                <label htmlFor="userPrenom">Prenom</label>
                                <input
                                    type="text"
                                    id="userPrenom"
                                    value={userPrenom}
                                    onChange={handleUserPrenomChange}
                                />
                            </div>


                            <div className="formInput">
                                <label>Wilaya</label>
                                <select value={selectedWilaya} onChange={handleWilayaChange}>
                                    <option value="">Select a Wilaya</option>
                                    {wilayas.map((wilaya) => (
                                        <option key={wilaya} value={wilaya}>
                                            {wilaya}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="formInput">
                                <label htmlFor="Email">Email</label>
                                <input
                                    type="text"
                                    id="Email"
                                    value={Email}
                                    onChange={handleEmailChange}
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



                            <button>SEND</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Cmodifier;