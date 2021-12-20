import { StyledTop,SectionSubject,SectionTeacher,Menu,Container,InsideContainer,StyledButton,ExamCard} from '../styles/sharedStyles';
import { AiOutlineBook,AiFillPlusCircle } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { getAllSubjects, getAllTeachers } from "../service/api";
export default function HomePage(){
   const [subjects,setSubjects] = useState([]);
   const [sortedSubject, setSortedSubjects] = useState([]);
   const [teachers,setTeachers] = useState([]);
   const [menuSub,setMenuSub] = useState(false);
   const [menuT,setMenuT] = useState(false);
    useEffect(()=> {
        getAllSubjects().then((res)=>{
            setSubjects(res.data);
            sort();
        })
        getAllTeachers().then((res)=>{
            setTeachers(res.data);
        })
        
    },[subjects]); 

    async function sort(){
        const sorted = subjects.sort((a,b) => {return b.periodo - a.periodo})
        setSortedSubjects(sorted);
    }

     function controlMenu(){
        if(menuSub === true){
            setMenuSub(false)
        }
        else if(menuT === true){
            setMenuT(false);
            setMenuSub(true);
        }
        else{
            setMenuSub(true);
        }   
    }
    function controlMenuTeacher(){
        if(menuSub === true){
            setMenuSub(false);
            setMenuT(true);
        }
        else if(menuT === false && menuSub === false){
            setMenuT(true);
        }
        else{
            setMenuT(false);
        }
    }

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
            <Menu>
                <h1>Filtrar por </h1>
                <div>
                <StyledButton style={{marginRight:"20px"}} onClick={controlMenu}>Disciplinas</StyledButton>
                <StyledButton onClick={controlMenuTeacher}>Professores</StyledButton>
                </div>
            
            </Menu>
                <div className="content">
               
                    <SectionSubject state={menuSub}>
                        <div>
                            {sortedSubject.map((sub)=>{
                                return(
                                <div className="card">
                                    <h1>{sub.periodo}º Periodo</h1>
                                    <h2 key={sub.Id}>{sub.Name}</h2>
                                </div>
                                )
                            })}
                        </div>
                    </SectionSubject>
                    <SectionTeacher state={menuT}>
                            <div>
                                {teachers.map((teacher)=>{
                                    return(<h1 key={teacher.Id}>{teacher.Name}</h1>)
                                })}
                            </div>
                    </SectionTeacher>
                    {/* <ExamCard>
                        <h1>Cálculo Infinitesimal</h1>
                        <h2>2020 - 1º Semestre</h2>
                        <h2>Marco Cabral</h2>
                    </ExamCard> */}
                </div>

            </InsideContainer>
        </Container>
        </>
    );
}

