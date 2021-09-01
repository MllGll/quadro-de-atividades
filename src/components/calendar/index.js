import React from 'react';
import './styles.css';

function Calendar (){
    return(
        <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

        <div className="calendar">
            <button><i class="material-icons">arrow_back_ios</i></button>
            <h1>Hoje</h1>
            <button><i class="material-icons">arrow_forward_ios</i></button>
        </div>
        </>
    )
}

export default Calendar;