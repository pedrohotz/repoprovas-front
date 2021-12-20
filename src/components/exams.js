import { useParams } from "react-router-dom";
import { Container, ExamCard, InsideContainer, StyledTop } from "../styles/sharedStyles";
import { AiOutlineBook,AiFillPlusCircle } from 'react-icons/ai';
import { useEffect,useState } from "react";
import { getExamByFilter } from "../service/api";
import NotFound from "./notfound";


export default function Exams(){
    const {filter} = useParams();
    const [exams, setExams] = useState([]);
    useEffect(()=>{
        getExamByFilter(filter).then((res)=>{
            setExams(res.data);
        })
    },[])
    console.log(exams);
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
            <h1 className="title">Provas de {filter}</h1>
            <div className="content-exam">
            {exams.length ?
            exams.map((exam)=>{
                return (
                    <ExamCard>
                        <h1>{exam.Name}</h1>
                        <h2>{exam.categoria}</h2>
                        <h2>{exam.professor}</h2>
                    </ExamCard>
                )
            }) : <NotFound/>}
           </div> 
        </InsideContainer>
        </Container>
        </>
    )
}