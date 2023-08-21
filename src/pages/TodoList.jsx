import AddTodo from "../component/AddTodo"
import * as data from "../utils/data"
import React, { useState, useEffect } from "react"

function TodoList() {

    const [liData, setLiData] = useState([]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 IndexedDB 데이터를 가져와 상태 업데이트
        data.dbGetAll().then((data) => {
            setLiData(data);
        });
    }, []);


  const handleAddTodo = (newTodo) => {
    data.dbAdd(newTodo.title, newTodo.timeH,newTodo.timeM, newTodo.content).then(() => {
      data.dbGetAll().then((data) => {
        setLiData(data);
      });
    });
  };

    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const newTodo = {
            title: formData.get("title"), //제목 가져오기
            timeH: formData.get("time_hour"), // 시간 가져오기
            timeM: formData.get("time_minute"), // 분 가져오기
            content: formData.get("content"),// 내용 가져오기
        };

        handleAddTodo(newTodo);
        e.target.reset();
    }

    return (
        <div className="todo_list">

            <ul className="todo">
                {liData.map((item) => (
                    <li key={item.id}>
                        <div>{item.title}</div>
                        <p>{item.time}</p>
                        <p>{item.content}</p>
                    </li>
                ))}
            </ul>
            <form onSubmit={submitData}>
                <AddTodo />
            </form>

        </div>
    );

}


export default TodoList;