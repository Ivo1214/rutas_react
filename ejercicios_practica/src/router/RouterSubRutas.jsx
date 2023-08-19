import React from 'react';
import { NavLink, Outlet, Routes, Route} from "react-router-dom";
import InicioSubRuta from '../views/subrutas/InicioSubRuta';
import SubRuta1 from '../views/subrutas/SubRuta1';
import SubRuta2 from '../views/subrutas/SubRuta2';

const RouterSubRutas = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='inicio'>Inicio Subrutas</NavLink>
                    </li>
                    <li>
                        <NavLink to='subruta1'>Subruta 1</NavLink>
                    </li>
                    <li>
                        <NavLink to='subruta2'>Subruta 2</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />

            <Routes>
                <Route path='inicio' element={<InicioSubRuta/>}></Route>
                <Route path='subruta1' element={<SubRuta1/>}></Route>
                <Route path='subruta2' element={<SubRuta2/>}></Route>
            </Routes>
            
        </>
    );
};

export default RouterSubRutas;