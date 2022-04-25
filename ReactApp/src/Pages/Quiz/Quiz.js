import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

// This is the quiz page user is taken to after inputting information for a quiz
const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  // Renders a new question each time the user answers a question and presses next
  useEffect(() => {
    // Sets the current questions options
    setOptions(
      questions &&
        // Shuffle the order so the correct answer is not always last as the API will return 
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);
  
  console.log(questions);
  // Shuffle the order so the correct answer is not always last as the API will return 
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
// Return to 
  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          {/* Sets the current active question */}
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        // Loads while waiting for info from the Trivia API
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
