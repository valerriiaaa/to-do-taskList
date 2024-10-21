import "./App.css";
import ListElement from "./components/ListElement";
import { useState } from "react";
import taskList from './data.js'; 

function App() {
  const [taskListState, setTaskListState] = useState(taskList); 
  const [completedTasks, setCompletedTasks] = useState(
    taskList.map((item) => item.isCompleted)
  );
  const [task, setTask] = useState({ id: "", title: "", text: "" });

  const handleClick = (index) => {
    const newCompletedTasks = [...completedTasks];
    newCompletedTasks[index] = !newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    const newTask = {
      id: Number(task.id),
      title: task.title,
      text: task.text,
      isCompleted: false,
    };
    setTaskListState((prevTasks) => [...prevTasks, newTask]);
    setTask({ id: "", title: "", text: "" });
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div className="container">
        <div className="input-task">
          <label>Enter id task</label>
          <input
            type="text"
            name="id"
            placeholder="Enter task id"
            value={task.id}
            onChange={handleChange}
          />
        </div>
        <div className="input-task">
          <label>Enter title task</label>
          <input
            type="text"
            name="title"
            placeholder="Enter task title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <div className="input-task">
          <label>Enter text task</label>
          <input
            type="text"
            name="text"
            placeholder="Enter task text"
            value={task.text}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {taskListState.map((item, index) => (
          <ListElement
            key={item.id}
            id={item.id}
            title={item.title}
            text={item.text}
            onDone={() => handleClick(index)}
            flag={completedTasks[index]}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
