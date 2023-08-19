import React, {useState, useEffect} from 'react';

const DataDisplay = () => {
    let [data, setData] = useState([]);
    useEffect(()=>{
        async function fetchData(){

            await new Promise ((resolve) => {
                setTimeout(resolve,2000);
            })

            const loadedData = [
                {id:1 , nombre:'Data 1'},
                {id:2 , nombre:'Data 2'},
                {id:3 , nombre:'Data 3'}
            ];
    
            setData(loadedData);
            console.log("Datos cargados")
        }

        fetchData();
    },[]);



    return (
        <div>
            <h1>Datos</h1>
            {data.length < 1 ? (
            <p>Loading...</p>
            ):(
            <ul>
                {data.map((dato)=>(
                    <li key={dato.id}>{dato.nombre}</li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default DataDisplay;