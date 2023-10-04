import React, { useState } from 'react';
import { auth } from '../../firebase';
import Header from '../../Components/Layout/Header'
import Footer from '../../Components/Layout/Footer'
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
        <>
            {/* <Header /> */}
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-3xl font-semibold mb-6">Iniciar Sesión</h1>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 border rounded-lg mb-4"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 border rounded-lg mb-4"
                />
                <button
                    onClick={handleSignIn}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
                >
                    Iniciar Sesión
                </button>
            </div>
            <Footer />
        </>

    );
}

export default App;
