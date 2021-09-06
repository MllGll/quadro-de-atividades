import React from 'react';
import './styles.css';
import {useState} from 'react';

function Add (props){
    const {onSave} = props;

    const [inputText, setInputText] = useState("");

    const index = Math.round(Math.random() * 99999999);

    const saveTask =()=>{onSave(inputText, index)}

    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <div className="add">
            <input placeholder="Nova Atividade..." value={inputText} onKeyPress={(e) => {if(e.key === 'Enter'){saveTask()}}} onChange={(e) => {setInputText(e.target.value)}}/>
            <button className="addButton" onClick={saveTask}><i class="material-icons">add</i></button>
        </div>
        </>
    )
}

export default Add;