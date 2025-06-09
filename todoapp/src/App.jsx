import React, { useState } from 'react';
function App() {
  let [task, setTask] = useState('');
  let [todoList, setTodoList] = useState([]);
  let addTask = () => {
    let newTask = task.trim();
    if (newTask !== '') {
      let updatedList = [...todoList, newTask].sort((a, b) =>
        a.localeCompare(b)   //spread operator add new task in new array 
      );
      setTodoList(updatedList);
      setTask(''); 
    }
  };
  let deleteTask = (index) => {
    let updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList.sort((a, b) => a.localeCompare(b)));
  };
  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()} 
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
