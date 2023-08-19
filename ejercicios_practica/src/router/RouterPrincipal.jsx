import React from 'react';
import { BrowserRouter as Router,NavLink, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Error404 from "../views/Error404";
import Componente1 from "../views/Componente1";
import RouterSubRutas from "./RouterSubRutas";

import InicioSubRuta from '../views/subrutas/InicioSubRuta';
import SubRuta1 from '../views/subrutas/SubRuta1';
import SubRuta2 from '../views/subrutas/SubRuta2';

const RouterPrincipal = () => {
    return (
        <Router>
            <nav>
                <ul>
                        <li>
                            <NavLink to='/'>Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/componente1'>Componente 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contacto</NavLink>
                        </li>
                        <li>
                            <NavLink to='/subrutas/inicio'>Subrutas</NavLink>
                        </li>
                    </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/contact' element={<Contact></Contact>}/>
                <Route path='*' element={<Error404/>}/>
                <Route path='/componente1' element={<Componente1/>}/>
                <Route path='/subrutas/*' element={<RouterSubRutas/>}/>
            </Routes>
        </Router>
    );
};

export default RouterPrincipal;