import AddTodo from "../component/AddTodo"
import * as data from "../assets/data"
import React, {useState} from "react"

function TodoList(){

    let dat= []

const [liData, setLiData] = useState();

console.log(liData)





const createLi= (e) =>{
    e.preventDefault()
    const title = e.target[0].value;
    const time = e.target[1].value;
    const content = e.target[2].value;
    data.dbAdd(title, time , content)
}




return (
    <div className="todo_list">

        <ul className="todo">

        </ul>
        <form onSubmit={createLi}>
            <AddTodo />
        </form>
        
    </div>
);

}


export default TodoList;