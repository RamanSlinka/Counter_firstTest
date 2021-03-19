import React from "react";
import './App.css';

type ButtonPropsType = {
disabled: boolean
    onClick: () => void

    text: string

}

export default function  Button(props: ButtonPropsType) {
    return (
        <div className={'btn'}>
            <button onClick={props.onClick}
                    disabled={props.disabled}
            >{props.text}</button>

        </div>
    )
}