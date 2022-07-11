import React from "react";
import MyButton from "./UI/button/MyButton"
import TaskUpdate from "./TaskUpdate";
import "../styles/Task.css";

const Task = ({id, title, description, fetchTasks}) => {
    const deleteTask = () => {
        fetch(`http://localhost:8000/tasks/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        }).then(fetchTasks)
    }

    return (
        <div key={id} className="task">
            <div className="task-info">
                <p className="task-info__title">{title}</p>
                <p className="task-info__description">{description}</p>
            </div>
            <div className="task-buttons">
                <MyButton 
                    onClick={
                        () => {
                            var taskModalId = `task-modal-${id}`
                            var modal = document.getElementById(taskModalId)
                            modal.style.display = "block"
                        }
                    } 
                    btn_text="Edit"     
                />
                <MyButton onClick={deleteTask} btn_text="Delete" />
            </div>
            <TaskUpdate
                id={id} 
                title={title} 
                description={description} 
                fetchTasks={fetchTasks}    
            />
        </div>
    )
}

export default Task;
