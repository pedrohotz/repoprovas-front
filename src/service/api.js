import axios from 'axios';


const URL = 'https://repoprovas-api-pedro.herokuapp.com/';



function getExamByFilter(filter){
    const promisse = axios.get(`${URL}/prova/${filter}`);
    return promisse
}


function getAllTeachers(){
    const promisse = axios.get(`${URL}/professores`);
    return promisse
}

function getAllSubjects(){
    const promisse = axios.get(`${URL}/disciplinas`);
    return promisse
}

function getTeacherBySubject(disciplina){
    const promisse = axios.get(`${URL}/professores/${disciplina}`)
    return promisse
}

function getProf_DiscId(professor,disciplina){
    const promisse = axios.get(`${URL}/professores/${professor}/${disciplina}`)
    return promisse;
}

function postExam(body){
    const promisse = axios.post(`${URL}/prova`,body);
    return promisse;
}
export {
    getExamByFilter,
    getAllTeachers,
    getAllSubjects,
    getTeacherBySubject,
    getProf_DiscId,
    postExam,
}