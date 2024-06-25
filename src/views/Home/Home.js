import "./Home.css"
import addbtn from "./pluss.png"
import ToDoCard from "../../components/ToDoCard/ToDoCard"
import { useState } from "react"
import toast,{Toaster} from "react-hot-toast"

function Home(){
     const [todoList,setToDoList]=useState([])
     
     const [newTask,setNewTask]=useState("")

   return( <div>
       <h1 className="app-title">ToDo App📄</h1>
       <div className="todo-list-container">
        {todoList.map((todoItem,i)=><ToDoCard key={i} todoItem={todoItem}/> ) }
        {
          todoList.length === 0 ?
        <p style={{textAlign:"center"}}>
        no task to show,please add new task
        </p>:null
        }
       </div>

       <div className="add-todo-item-container">
         <input type="text"
          className="add-input"
           placeholder="add new items"
           value={newTask}
           onChange={(e)=>setNewTask(e.target.value)}
           />
       <img src={addbtn} 
       alt="add" 
        className="add-icon"
        onClick={()=>{
          setToDoList([...todoList,newTask])
          setNewTask("")
          toast.success('task added succesfully')
        }}
        />
       </div>
       <Toaster position="top-right"/>
    </div>
   )

}

export default Home 