import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";


const Contact = () => {
    let [mensaje, setMensaje] = useState("");

    function handleEvent(e) {
        e.preventDefault();
        setMensaje("Mensaje enviado con exito");
    }

    return (
        <>
            <h1>Contacto</h1>
            <form onSubmit={handleEvent}>
                <label>Nombre: </label>
                <input type="text" placeholder='Nombre'/>
                <label>Mensaje: </label>
                <input type="text" placeholder='Mensaje'/>
                <input type="submit" placeholder='Enviar'/>
            </form>
            <Link to='/'>Volver al inicio</Link>
            <p>{mensaje}</p>
        </>
    );
};

export default Contact;