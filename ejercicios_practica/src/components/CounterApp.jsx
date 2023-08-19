import React, {useState, useEffect} from 'react';

const CounterApp = () => {
    let [counter, setCounter] = useState(0);

    useEffect(() =>{
        let intervalID = setInterval(() =>{setCounter(counter + 1)},1000);
        return () => {
            clearInterval(intervalID);
        }
    });


    return (
        <div>
            <h1>Counter App</h1>
            <p>Counter: {counter}</p>
        </div>
    );
};

export default CounterApp;