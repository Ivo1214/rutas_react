import React from 'react';
import { BrowserRouter as Router,NavLink, Routes, Route, Navigate } from "react-router-dom";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Error404 from "../views/Error404";
import Componente1 from "../views/Componente1";
import RouterSubRutas from "./RouterSubRutas";
import Persona from '../views/Persona';



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
                            <NavLink to='/persona'>Persona</NavLink>
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
                <Route path='/persona' element={<Persona/>}> 
                    <Route path='/persona/:nombre/:apellido' element={<Persona/>}/>
                    <Route path='/persona/:nombre/' element={<Persona/>}/>
                </Route>
                <Route path='/subrutas/*' element={<RouterSubRutas/>}/>
                <Route path='/navegar' element={<Navigate to="/persona" />}/>
                

            </Routes>
        </Router>
    );
};

export default RouterPrincipal;