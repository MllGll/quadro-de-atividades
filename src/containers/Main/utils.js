const addTask = (inputText, setInputText, id, period, tasks, setTasks) => {
  if (inputText) {
    setInputText("");
    setTasks([
      ...tasks,
      { inputText, id, period, checked: false, fixed: false },
    ]);
  }
};

const removeTask = (id, tasks, setTasks) => {
  setTasks(tasks.filter((task) => task.id !== id));
};

export { addTask, removeTask };
