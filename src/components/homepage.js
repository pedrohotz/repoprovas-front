import styled from "styled-components";
import { AiOutlineBook,AiFillPlusCircle } from 'react-icons/ai';
export default function HomePage(){

    return(
        <>
        <StyledTop>
            <h1 className="logo">RepoProvas</h1>
            <div>
               <AiFillPlusCircle style={{fontSize:"30px",marginRight:"10px"}}/><h1>Enviar uma Prova</h1>
               <AiOutlineBook style={{fontSize:"30px",marginRight:"10px" }}/><h1>Vizualizar provas</h1>
            </div>
        </StyledTop>
        <Container>
            <InsideContainer>
                <ExamCard>
                    <h1>Cálculo Infinitesimal</h1>
                    <h2>2020 - 1º Semestre</h2>
                    <h2>Marco Cabral</h2>
                </ExamCard>

            </InsideContainer>
        </Container>
        </>
    );
}

const StyledTop = styled.header`
display: flex;
align-items: center;
justify-content: space-around;
width: 100vw;
height: 60px;
background: #fafafa;
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

const Container = styled.div`
width: 100vw;
height: calc(100vh - 60px);
background: #A2B5CD;
display: flex;
align-items: start;
justify-content: center;
`

const InsideContainer = styled.div`
width: 80vw;
background: #fafafa;
display: flex;
justify-content: space-around;
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
 :hover{
                transform: scale(1.1);
            }
 
 h1{
    font-family: 'Roboto',sans-serif;
    font-size: 20px;
    word-break: break-word;

 }
`