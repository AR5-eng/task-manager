import React from "react";
import MyButton from "./UI/button/MyButton"
import "../styles/Task.css";

const Task = ({key, title, description}) => {
    return (
        <div key={key} className="task">
            <div className="task-info">
                <p key={key} className="task-info__title">{title}</p>
                <p key={key} className="task-info__description">{description}</p>
            </div>
            <div className="task-buttons">
                <MyButton btn_text="Edit" />
                <MyButton btn_text="Delete" />
            </div>
        </div>
    )
}

export default Task;
