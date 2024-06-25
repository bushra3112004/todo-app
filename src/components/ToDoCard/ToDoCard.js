import React  from "react"
import "./ToDoCard.css"
import ImgDel from "./bin.png"

function ToDoCard({task,category}){
    return(
        <div className="todo-card">
            <img src={ImgDel} alt="delete" className="delete-icon" />

            {task}
        <span className="category">
            {category}
        </span>

            
        </div>
    )
}
export default ToDoCard