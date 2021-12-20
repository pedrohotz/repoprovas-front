import { Container, InputBox, InsideContainer, StyledButton, StyledInput, StyledTop } from "../styles/sharedStyles"
import { AiOutlineBook,AiFillPlusCircle } from 'react-icons/ai';
import { useState,useEffect } from "react";
import { getAllSubjects, getProf_DiscId, getTeacherBySubject, postExam } from "../service/api";
import Swal from 'sweetalert2';
export default function SendExam(){
    const [subjects,setSubjects] = useState([]);
    const [subject, setSubject] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [teacher, setTeacher] = useState('');
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [Link,setLink] = useState('');
    const [Prof_DiscId, setProf_DiscId] = useState('');
    useEffect(()=> {
        getAllSubjects().then((res)=>{
            setSubjects(res.data);
        })
    },[]); 

    useEffect(()=>{
        getTeacherBySubject(subject).then((res)=>{
            setTeachers(res.data);
        }).catch(()=>{
            setTeachers([]);
        })
    },[subject]);

    function generateCategoryId(category){
        if(category === 'P1'){
            return 1;
        }
        if(category === 'P2'){
            return 2;
        }
        if(category === 'P3'){
            return 3;
        }
        if(category === '2Ch'){
            return 4;
        }
        if(category === 'Outras'){
            return 5;
        }
    }

    useEffect(()=>{
        getProf_DiscId(teacher,subject).then((res)=>{
            setProf_DiscId(res.data.id);
        })
    }, [teacher])


    function sendExam(e){
        e.preventDefault()
        const CategoryId = generateCategoryId(category);
        const body = {
            Name: title,
            CategoryId,
            Prof_DiscId,
            Link
        }
        console.log(body);
        if(!body.Name || !body.CategoryId || !body.Prof_DiscId || !body.Link){
            Swal.fire({
                icon: "error",
                title: "ops",
                text: "Preencha os campos corretamente"
            })
            return;
        }
        postExam(body).then(()=>{
            Swal.fire({
                icon: "success",
                text: "Prova inserida com sucesso"
            }) 
        })

        
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
                <InputBox>
                <form onSubmit={e => sendExam(e)}> 
                    <div>
                        <h1>Digite o título da prova: </h1>
                        <StyledInput placeholder="Título..." type="text" value={title} onChange={e => setTitle(e.target.value)} required></StyledInput>
                    </div>
                    <div>
                        <h1>Categoria:</h1>
                        <select name="categories" value={category} onChange={e => setCategory(e.target.value)} required>
                            <option>Categoria</option>
                            <option>P1</option>
                            <option>P2</option>
                            <option>P3</option>
                            <option>2Ch</option>
                            <option>Outras</option>
                        </select>
                    </div>
                    <div>
                        <h1>Selecione a disciplina:</h1>
                        <select name="disciplina" value={subject} onChange={e => setSubject(e.target.value)} required>
                            <option>Disciplina</option>
                        {subjects.map((sub)=> {
                            return (<option>{sub.Name}</option>)
                        })}
                        </select>
                    </div>
                    <div>
                        <h1>Selecione o professor:</h1>
                        <select name="professores" value={teacher} onChange={e => setTeacher(e.target.value)} required>
                            <option>Professor</option>
                            {teachers.map((teacher)=>{
                                return (<option>{teacher.Name}</option>)
                            })}
                        </select>
                    </div>
                    <div>
                        <h1>Link para o PDF:</h1>
                        <StyledInput placeholder="Link..." value={Link} onChange={e => setLink(e.target.value)} required type="url"></StyledInput>
                    </div>
                    <StyledButton style={{marginTop:"20px"}} type="submit">Enviar</StyledButton>
                </form>
                </InputBox>
            </InsideContainer>
        </Container>
        </>
    )
}