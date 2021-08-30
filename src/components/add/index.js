import React from 'react';
import './styles.css';
import {useState} from 'react';

function Add (props){
    const {onSave} = props;

    const [inputText, setInputText] = useState("");

    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <div className="add">
            <input placeholder="Nova Atividade..." value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button className="addButton" onClick={() => {onSave(inputText)}}><i class="material-icons">add</i></button>
        </div>
        </>
    )
}

export default Add;