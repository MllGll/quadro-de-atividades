import React, { useState } from 'react';
import './index.css';
import Task from "./components/task"
import Add from "./components/add"
import Calendar from "./components/calendar"

function App() {

  const [tasks, setTasks, index] = useState([])

  const addTask = (task) => {
    if(task)setTasks([...tasks, task]);
  }

  const removeTask = (index) => {
      setTasks(tasks.filter((task) => task.key !== index));
  }

  return (
    <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"></link>
        <header>
          <Calendar/>
        </header>
        <div>
          <div className="search">
            <Add onSave={addTask}/>
          </div>
          <div className="board">
            {tasks.map((task, index) => {return <Task task={task} key={index} onRemove={removeTask}/>})}
          </div>
        </div>
        <footer>
          <p>Desenvolvido por Marcello Gallante.</p>
        </footer>
    </div>
  );
}

export default App;
