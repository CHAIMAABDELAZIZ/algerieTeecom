import React, { useState } from 'react';
import './login.scss'; // Import des styles SCSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { username, password };
        console.log('Sending login request:', user); // Log les données envoyées

        try {
            const response = await fetch('http://localhost:8000/login', { // Assurez-vous que l'URL correspond à votre endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            console.log('Response status:', response.status); // Log le code de statut de la réponse

            if (response.ok) {
                setError('Login successful');
                // Rediriger vers une autre page si nécessaire
            } else {
                const errorData = await response.json();
                console.log('Error response:', errorData); // Log les données d'erreur reçues
                setError(errorData.message || 'Login failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login">
            <div className="card">
                <div className="left"></div>
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
