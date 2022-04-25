import axios from "axios";
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Link } from "react-router-dom";
import { render } from '@testing-library/react';
import './App.css';
//import data from './Data/questions.json';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import { Button, MenuItem, TextField } from "@material-ui/core";
import Quiz from './Pages/Quiz/Quiz';
import Result from "./Pages/Result/Result";

// import Question from './components/Question';
 
function App() {
 const [questions, setQuestions] = useState();
 const [name, setName] = useState();
 const [score, setScore] = useState(0);
 
 const fetchQuestions = async (category = "", difficulty = "") => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
  );

  setQuestions(data.results);
};
 
   return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url("/question-background.png")'}}>
        <Header/>
           <Routes>
              <Route path = "/" element={
                <Home 
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }/>
              <Route path = "/quiz" element={
                <Quiz 
                  name={name}
                  questions={questions}
                  score={score}
                  setScore={setScore}
                  setQuestions={setQuestions}
                />
              }/>
              <Route path = "/result" element={
                <Result 
                  name={name}
                  score={score}
                />
              }/>
           </Routes>
      </div>
    </Router>
    
   );
 }
 
export default App;
 

