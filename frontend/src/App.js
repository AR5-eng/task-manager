import React, { createContext, useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./styles/App.css";

const TasksContext = createContext({
  tasks: [],
  fetchTasks: () => {}
})

function App() {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
      const response = await fetch("http://localhost:8000/tasks")
      const tasks = await response.json()
      setTasks(tasks.data)
  }

  useEffect(() => {
      fetchTasks()
  }, [])

  return (
    <div className="App">
      <div className="placeholder"></div>
      <div className="component_list">
        <TaskForm fetchTasks={fetchTasks} />
        <hr></hr>
        <TasksContext.Provider value={{tasks, fetchTasks}}>
            <div className="task_list">
                {tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            title={task.title}
                            description={task.description}
                        />
                    )
                })}
            </div>
        </TasksContext.Provider>
      </div>
      <div className="placeholder"></div>
    </div>
  );
}

export default App;
