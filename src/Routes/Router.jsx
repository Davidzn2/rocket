import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from '../Pages/Home/Home'
import FormInscripcion from '../Pages/FormInscripcion/FormInscripcion';
import Projects from '../Pages/Projects/Projects'
import Login from '../Pages/Login/Login'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/inscribete" element={<FormInscripcion />} />
                <Route path="/proyectos" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes