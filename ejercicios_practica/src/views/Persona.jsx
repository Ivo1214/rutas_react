import React, {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Persona = () => {
    const { nombre = "Nombre", apellido = "Apellido" } = useParams();
    const navigate = useNavigate();
    // const [nombreInput, setNombreInput] = useState(nombre);
    // const [apellidoInput, setApellidoInput] = useState(apellido);

    function handleSubmit(e){
        e.preventDefault();
        // navigate(`/persona/${nombreInput}/${apellidoInput}`);
        navigate(`/persona/${e.target.nombre.value}/${e.target.apellido.value}`);
    }

    function handleReset(e){
        e.preventDefault();
        e.target.form.reset();
        // setNombreInput('Nombre');
        // setApellidoInput('Apellido');

    }

    return (
        <>
            <h1>Tu nombre es: {nombre} {apellido}</h1>
            <form onSubmit={handleSubmit}>
                <input name='nombre' type="text" placeholder='Ingrese su nombre'/>
                <input name='apellido' type="text" placeholder='Ingrese su apellido'/>
                {/* <input
                    type="text"
                    placeholder='Ingrese su nombre'
                    onChange={(e) => setNombreInput(e.target.value)}
                />
                <input
                    type="text"
                    placeholder='Ingrese su apellido'
                    onChange={(e) => setApellidoInput(e.target.value)}
                /> */}
                <input type='submit' />
                <button type='button' onClick={handleReset}>Reset</button>
            </form>
        </>
    );
};

export default Persona;