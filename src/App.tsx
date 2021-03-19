import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import Button from "./Button";

function App() {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
        if (count === 5) setCount(5)
    }
    const cancel = () => setCount(0)

    return (
        <div className={'background'}>
            <div className={'field'}>
                <Counter valueInput={count}/>
                <div className={'buttons'}>
                    <Button onClick={increment}
                            disabled={count === 5}
                            text={'inc'}/>
                    <Button onClick={cancel}
                            disabled={count < 5}
                            text={'reset'}/>
                </div>
            </div>
        </div>
    )

}

export default App

