// import { createBrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';

//importamos todas las vistas para despues imprementarlas
import Preload from './views/preload.jsx';
import Licencia1 from './views/licencia1.jsx';
import LoginUsuario from './views/loginUsuario.jsx';
import LoginCentro from './views/loginCentro.jsx';

function router(){
    return (
        <Routes>
            <Route path='/' element={<Preload />} />
            <Route path='licencia1' element={<Licencia1 />} />
            
            <Route path='licencia1/persona' element={<Persona/>} />
            <Route path='licencia1/centro' element={<Centro/>} />
            
        </Routes>
    );
}

export default router;