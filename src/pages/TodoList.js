import AddTodo from "../component/AddTodo"
import * as data from "../assets/data"

function TodoList(){



const createLi= (e) =>{
    e.preventDefault()


    const title = e.target[0].value;
    const time = e.target[1].value;
    const content = e.target[2].value;

    data.dbAdd(title, time , content)



}

    let LiArr = (e)=>{
        console.log(data.dbGetAll())
    }

return (
    <div className="todo_list">
        <ul className="todo">
            <li>
                <LiArr />
            </li>
        </ul>
        <form onSubmit={createLi}>
            <AddTodo />
        </form>
        
    </div>
);

}


export default TodoList;