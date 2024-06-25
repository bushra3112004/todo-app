import "./Home.css"
import addbtn from "./pluss.png"
import ToDoCard from "../../components/ToDoCard/ToDoCard"
import { useState } from "react"
import toast,{Toaster} from "react-hot-toast"

function Home(){
     const [todoList,setToDoList]=useState([])
     const [newTask,setNewTask]=useState("")
     const [category,setCategory]=useState("")

      //function deleteItem(item){
      //const newTodoList=todoList.filter((item,i)=>{
        //if(i==index){
       //   return true
       // }
        ////else{
        //  return false
       // }
      // })
      // setToDoList[newTodoList]}

   return( <div>
       <h1 className="app-title">ToDo App📄</h1>
       <div className="todo-list-container">
        {todoList.map((todoItem,i)=>{
          const{task,category}=todoItem
        return <ToDoCard key={i} index={i} task={task} category={category} />
         })}
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

          <select className="category-select" 
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          >
         <option value="">category</option>
         <option value="📔learning"> learning</option>
         <option value="⚙️work">work</option>
         <option value="💻personal">personal</option>
         <option value="🛍️shopping">shopping</option>
         <option value="👨‍⚕️health">health</option>
         <option value=" 🏋fitness">fitness</option>
         <option value="😵other">other</option>
          </select>

       <img src={addbtn} 
       alt="add" 
        className="add-icon"
        onClick={()=>{
          if(newTask===""){
            toast.error('task cannot empty!!')
            return
          }
          if(category===""){
            toast.error('please select category')
            return
          }
          setToDoList([...todoList,{task:newTask,category:category}])
          setNewTask("")
          setCategory("")
          toast.success('Task added successfully')
        }}
        />
       </div>
       <Toaster position="top-right"/>
    </div>
   )

}

export default Home 