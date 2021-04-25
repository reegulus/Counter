import React, {useState} from 'react';
import './App.css';

import {Counter} from "./Components/Counter/Counter";

function App() {
    const maxValue = 5
    let [count, setCount] = useState(0)

    const incCount = () => {
        if (maxValue === count) {
            return
        }
        setCount(count + 1)
    }

    const resetCount = () => setCount(0)


    return (
        <div className="App">
            <header className="App-header">
               <Counter
                   incCount={incCount}
                   resetCount={resetCount}
                   count={count}
                   maxValue={maxValue}
               />
            </header>
        </div>
    );
}

export default App;

