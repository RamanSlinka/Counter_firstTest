import React from 'react';
import './App.css';

type CounterProps = {
    valueInput: number

}

export default function Counter(props: CounterProps) {
    return (
        <div className={props.valueInput === 5 ? 'input-red ' : 'input'}>
            <b>{props.valueInput}</b></div>

    )
}




