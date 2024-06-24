import "./Home.css"
import addbtn from "./pluss.png"

function Home(){
   return( <div>
       <h1 className="app-title">ToDo App📄</h1>
       <div className="todo-list-container">
        <h2>lis will go here....</h2>
       </div>

       <div className="add-todo-item-container">
         <input type="text" className="add-input" placeholder="add new items"/>
       <img src={addbtn} alt="add"  className="add-icon"/>
       </div>
    </div>
   )

}

export default Home 