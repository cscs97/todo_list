import AddTodo from "../component/AddTodo"
import * as data from "../utils/data"
import React, { useState, useEffect } from "react"
import { colors, fontFamily, fontSizes } from "../assets/styles/styles"
import styled from 'styled-components';



function TodoList() {

    const [liData, setLiData] = useState([]);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 IndexedDB 데이터를 가져와 상태 업데이트
        data.dbGetAll().then((data) => {
            setLiData(data);
        });
    }, []);


    const handleAddTodo = (newTodo) => {
        data.dbAdd(newTodo.title, newTodo.timeH, newTodo.timeM, newTodo.content).then(() => {
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

    function openList(e){
        console.log(e.target.parentNode)
    }


    return (
        <TodoListBody className="todo_list">

            <ul className="todo">
                {liData.map((item) => (
                    <li key={item.id} onClick={openList}>
                        <div className="title">{item.title} <span>{item.time}</span></div>
                        <ul className="list">
                            <li>{item.time}</li>
                            <li>{item.content}</li>
                        </ul>
                    </li>
                ))}
            </ul>
            <form onSubmit={submitData}>
                <AddTodo />
            </form>

        </TodoListBody>
    );

}

const TodoListBody = styled.div`
    background-color:#eee;
    padding:1rem;
    .todo > li {
        width:90%;
        font-size:2rem;
        background-color:${colors.back1};
        margin:0.5rem auto;
        border-radius: 1rem;
        overflow:hidden;
        color:${colors.mainFont}
    }
    .todo > li >.title{
        height:4rem;
        padding:1rem;
        font-weight:700;
    }
    .todo > li >.title span{
        font-size: 1rem;
        opacity:0.8;
    }
    .todo > li .list{
        background-color: ${colors.secondary};
        overflow:hidden;
        height:0rem;
    }

`

export default TodoList;