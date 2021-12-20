import axios from 'axios';


const URL = 'http://localhost/4000';



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

export {
    getExamByFilter,
    getAllTeachers,
    getAllSubjects
}