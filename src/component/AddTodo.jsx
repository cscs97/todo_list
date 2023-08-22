import { colors, fontFamily, fontSizes } from "../assets/styles/styles"
import styled from 'styled-components';




function AddTodo() {




    return (

        <FormBody>
            <div className="addTo">내용추가</div>
            <div className="input_box">
                <input type="text" className='title' placeholder="제목" name="title" />
            </div>
            <div className="input_box">
                <input type="text" className="time" placeholder="시간" name="time_hour" />
                <input type="text" className="time" placeholder="시간" name="time_minute" />
            </div>


            <div className="input_box">
                <input type="text" className="contents" placeholder="내용" name="content" />
            </div>


            <button>추가</button>
        </FormBody>

    );

}


const FormBody = styled.div`
    display:none;
    background-color : ${colors.back1};
    font-family : ${fontFamily.fontMain};
    width:40rem;
    text-align: center;
    height:30rem;
    border-radius: 1rem;
    padding: 2rem;
    .addTo{
        font-size:${fontSizes.contTitle};
        color:${colors.mainFont}
    }

    .input_box{
        width:30rem;
        margin:1rem auto;
        display:flex;
        justify-content: space-between;
    }
    input{
        width:100%;
        padding:1rem;
        box-sizing: border-box;
        border: 0;
        font-size: 2rem;
        font-family : ${fontFamily.fontSub};
        font-weight:700;
        background-color: ${colors.back2};
        color:${colors.mainFont}

    }
    input::placeholder{
        color:${colors.mainFont + '7e'}
    }
    input.time{
        width:45%;
    }
    input:focus{
        outline:none;
    }
    button{
        margin-top:1rem;
        background-color:${colors.mainFont};
        font-family:${fontFamily.fontMain};
        width:20rem;
        font-size:${fontSizes.button};
        padding:1rem;
        border:2px solid ${colors.back3}
    }
`;



export default AddTodo;