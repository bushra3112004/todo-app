import React  from "react"
import "./ToDoCard.css"
import ImgDel from "./bin.png"
import "./../../views/Home/Home"

function ToDoCard({index,task,category,deleteItem}){
    return(
        <div className="todo-card">
            <img src={ImgDel} alt="delete" className="delete-icon"
            onClick={()=>{
                deleteItem(index)
            }

            }
                />

            {task}
        <span className="category">
            {category}
        </span>

            
        </div>
    )
}
export default ToDoCard