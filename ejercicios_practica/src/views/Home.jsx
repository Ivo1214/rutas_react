import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Pagina de inicio</h1>
            <p>Esta es la pagina principal</p>
            <Link to='/contact'>Ir a contacto</Link>
        </div>
    );
};

export default Home;