import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "../styles/TaskUpdate.css";

const TaskUpdate = ({id, title, description, fetchTasks}) => {
    // eslint-disable-next-line
    const [oldTask, setOldTask] = useState({
        id: id,
        title: title,
        description: description
    })

    const [newTask, setNewTask] = useState({
        id: id,
        title: title,
        description: description
    })

    var taskModalId = `task-modal-${id}`
    var emptyInputId = `empty-input-${id}`

    const hideTaskModal = () => {
        var modal = document.getElementById(taskModalId)
        modal.style.display = "none"
    }

    const updateTask = () => {
        var emptyInput = document.getElementById(emptyInputId)

        if ((!newTask.title) && (!newTask.description)) {
            emptyInput.style.display = "block"
        }
        else {
            fetch(`http://localhost:8000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
            }).then(fetchTasks)
            hideTaskModal()
        }
    }

    return (
        <div id={taskModalId} className="task-modal">
            <div className="task-modal-content">
                <h1 className="task-modal-content__header">Edit Task</h1>
                <div className="task-modal-content__body">
                    <div className="task-modal-content__body-input_list">
                        <MyInput 
                            id="task-modal-content__body-input_list__title"
                            value={newTask.title} 
                            onChange={e => setNewTask({...newTask, title: e.target.value})}    
                        />
                        <MyInput
                            id="task-modal-content__body-input_list__description"
                            value={newTask.description} 
                            onChange={e => setNewTask({...newTask, description: e.target.value})}
                        />
                    </div>
                    <div id={emptyInputId} className="task-modal-content__body-input_empty">
                        <p>All fields are empty.</p>
                    </div>
                    <div className="task-modal-content__body-button_list">
                        <MyButton 
                            onClick={updateTask} 
                            btn_text="Edit"    
                        />
                        <MyButton
                            onClick={
                                () => {
                                    setNewTask(oldTask)
                                    hideTaskModal()
                                }
                            }
                            btn_text="Close"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskUpdate;
