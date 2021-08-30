import React, { useState } from 'react';
import './index.css';
import Task from "./components/task"
import Add from "./components/add"

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    if(task)setTasks([...tasks, task]);
  }

  return (
    <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"></link>
        <header>
          <h1>Hoje</h1>
        </header>
        <div>
          <div className="search">
            <Add onSave={addTask}/>
          </div>
          <div className="board">
            {tasks.map((task, index) => {return <Task task={task} key={index}/>})}
          </div>
        </div>
    </div>
  );
}

export default App;
