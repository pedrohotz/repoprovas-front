import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage.js';
import Exams from './components/exams';
import SendExam from './components/sendExam';


export default function App(){
    return(   
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} exact></Route>
                <Route path="/:filter" element={<Exams/>} exact></Route>
                <Route path="/send" element={<SendExam/>} exact></Route>
            </Routes>
        </BrowserRouter>
    );
 
}