import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// import PrivateRoute from './PrivateRoute';
import Home from '../Pages/Home/Home'
import FormInscripcion from '../Pages/FormInscripcion/FormInscripcion';
import Projects from '../Pages/Projects/Projects'
import Login from '../Pages/Login/Login'
import Contact from '../Pages/Contact/Contact'
import Project from "../Pages/Project/Project";
import Recursos from "../Pages/Resources/Resources";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscribete" element={<FormInscripcion />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proyecto/:id" element={<Project />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes