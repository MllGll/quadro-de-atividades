import React from 'react';
import './styles.css';

function Task (props) {
    const {task, onRemove, key} = props;

    return(
        <>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>

            <div className="task">
            <div className="check">
                <button className="checkbox"><i class="material-icons">done</i></button>
            </div>
                <div className="resto">
                    <span>{task}</span>
                    <div className="but">
                        <button className="fixar"><i class="material-icons">schedule</i></button>
                        <button className="excluir" onClick={() => onRemove(key)}><i class="material-icons">delete</i></button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Task;