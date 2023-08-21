
function AddTodo() {

    return (

        <div className='formBody' >
            <input type="text" className='title' placeholder="제목" name="title" /><br/>
            <input type="text" className="time" placeholder="시간" name="time_hour" />
            <input type="text" className="time" placeholder="시간" name="time_minute" />
            <br />
            <input type="text" className="contents" placeholder="내용" name="content" />
            <br />
            <button>추가</button>
        </div>

    );

}


export default AddTodo;