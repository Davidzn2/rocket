import React, { useState } from 'react';
import { auth } from '../../firebase';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            console.log('Inicio de sesión exitoso');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Iniciar Sesión</button>
        </div>
    );
}

export default App;
