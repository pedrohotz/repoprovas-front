import styled from "styled-components";


const StyledTop = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
position: fixed;
top: 0;
width: 100vw;
height: 60px;
background: #fafafa;
border-bottom: 1px solid #CDC9C9;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    .logo{
        font-family: 'Roboto',sans-serif;
        font-size: 30px;
        font-weight: 700;
    }
    div{
        display: flex;
        align-items: center;
        h1{
            margin-right: 20px;
            font-family: 'Roboto',sans-serif;
            font-size: 20px;
        }
    }

`
const SectionSubject = styled.div`
    .card{
        width: 100px;
        height: 40px;
        margin-bottom: 20px;
        margin-top:10px;
        background: #CDCDC1;
        padding: 10px;
        border-radius: 10px;
        h1{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 5px;
        }
    }
display: ${props => props.state ? 'flex' : 'none'}
`
const SectionTeacher = styled.div`
.card{
    margin-top:10px;
    font-size: 20px;
    text-align: center;
    background:#CDCDC1;
    padding: 10px;
    border-radius: 10px;
}
display: ${props => props.state ? 'flex' : 'none'}
`

const Container = styled.div`
width: 100vw;
height: 100vh;
margin-top: 60px;
background: #A2B5CD;
display: flex;
align-items: start;
justify-content: center;
`

const InsideContainer = styled.div`
width: 80vw;
background: #fafafa;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border: 1px gray solid;
border-radius: 5px;
margin-top: 50px;
padding: 12px;
    .content-exam{
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .title{
        font-size: 30px;
        margin-bottom: 30px;
        margin-top: 20px;
    }
`

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    h1{
        font-size: 30px;
        font-family: 'Roboto',sans-serif;
        margin-bottom: 20px;
    }
`

const StyledButton = styled.button`
width: 180px;
height:  60px;
font-family: 'Roboto',sans-serif;
font-size: 25px;
border: none;
background: #A2B5CD;
border-radius: 10px;
cursor: pointer;
`

const ExamCard = styled.div`
 width: 120px;
 height: 150px;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 text-align: center;
 background: #696969;
 cursor: pointer;
 color: white;
 text-overflow: ellipsis;
 border: black 1px solid;
 overflow: hidden;
 border-radius: 5px;
 transition: 0.5s;
 box-shadow: 2px 2px 2px #696969;
 margin-left: 20px;
 :hover{
                transform: scale(1.1);
            }
 
 h1{
    font-family: 'Roboto',sans-serif;
    font-size: 20px;
    word-break: break-word;

 }
`
const InputBox = styled.div`
width:  100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
 h1{
     font-size: 20px;
     margin-bottom: 10px;
     margin-top:10px;
 }
 select{
     width: 320px;
     font-size: 20px;
     height: 50px;
     background:#B9D3EE;
     border: 0px;
     outline: 0px;
 }
 form{
     display: flex;
     flex-direction: column;
     align-items: center;
 }
`
const StyledInput = styled.input`
width: 300px;
height: 40px;
border: none;
background: #B9D3EE;
border-radius: 10px;
padding: 10px;
font-size: 20px;
`


export {
    StyledTop,
    SectionSubject,
    SectionTeacher,
    Menu,
    Container,
    InsideContainer,
    StyledButton,
    ExamCard,
    InputBox,
    StyledInput
}