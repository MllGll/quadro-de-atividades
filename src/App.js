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
        <header>
          <h1>Hoje</h1>
        </header>
        <div>
          <Add onSave={addTask}/>
          <div className="board">
            {tasks.map((task, index) => {return <Task task={task} key={index}/>})}
          </div>
        </div>
    </div>
  );
}

export default App;
