import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "../styles/TaskForm.css";

const TaskForm = ({fetchTasks}) => {
    const [task, setTask] = useState({
        user_id: 1,
        title: "",
        description: ""
    })

    const addNewTask = (event) => {
        event.preventDefault()

        fetch("http://localhost:8000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        }).then(fetchTasks)

        setTask({
            title: "",
            description: ""
        })
    }

    return (
        <form>
            <h1>New Task</h1>
            <MyInput 
                type="text"
                value={task.title}
                onChange={e => setTask({...task, title: e.target.value})}
                placeholder="Title"
            />
            <MyInput
                type="text"
                value={task.description}
                onChange={e => setTask({...task, description: e.target.value})}
                placeholder="Description" 
            />
            <MyButton onClick={addNewTask} btn_text="Add" />
        </form>
    )
}

export default TaskForm;
