

function AddTodo() {

    return (

            <div className="form_body" >
                <input type="text" className="title" placeholder="제목" />
                <input type="text" className="time" placeholder="시간" />
                <input type="text" className="contents" placeholder="내용" />
                <button>추가</button>
            </div>

    );

}


export default AddTodo;