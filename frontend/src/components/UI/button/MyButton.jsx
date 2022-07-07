import React from "react";
import classes from "./MyButton.module.css"

const MyButton = ({btn_text, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>{btn_text}</button>
    )
}

export default MyButton;
