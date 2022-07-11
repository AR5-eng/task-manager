import React, { createContext, useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import MyButton from "./UI/button/MyButton";
import "../styles/TasksComponent.css";

const TasksContext = createContext({
    tasks: [],
    fetchTasks: () => {}
})

const TasksComponent = () => {
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
        <div className="tasks-component">
            <TaskForm className="tasks-component__form" fetchTasks={fetchTasks} />
            <hr></hr>
            <TasksContext.Provider value={{tasks, fetchTasks}}>
            <div className="tasks-component__task-list">
                {tasks.map(task => {
                    return (
                        <Task
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            fetchTasks={fetchTasks}
                        />
                    )
                })}
            </div>
            </TasksContext.Provider>
            <MyButton btn_text="Log Out" />
        </div>
    )
}

export default TasksComponent;
