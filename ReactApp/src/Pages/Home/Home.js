import "./Home.css";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
// Home is where the user can choose to select if they want to take a quiz or a questionnaire and choose options accordingly
const Home = ({ name, setName, fetchQuestions}) => {
  // the category button gives you options to select
  const [category, setCategory] = useState("");
  // handles errors such as not filling in all fields
  const [error, setError] = useState(false);
  // holds quiz difficulty for trivia quizzes
  const [difficulty, setDifficulty] = useState("")

  // comes from useNavigateHook in react-router-dom
  const navigate = useNavigate();

  // used when user clicks start quiz
  const handleSubmit = () => {
    // if fields aren't filled
    if(!category || !name || !difficulty) {
      setError(true);
      return;
    }
    // if all fields are filled
    else {
      setError(false);
      fetchQuestions(category);
      // Push all of the inputs to the quiz to begin quiz
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings_select">
        {error && <ErrorMessage>Please Fill all of the fields</ErrorMessage>}
          <TextField 
            style={{marginBottom:25}}
            label="Enter Your Name" 
            variant="outlined"
            // set the name to the input name from user
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select 
            label="Select Quiz"
            variant="outlined"
            style={{ marginBottom: 30}}
            // set the category to option selected by the user
            onChange={(e) => setCategory(e.target.value)}
            // set the value of the field to category
            value ={category}
            >
            {
              Categories.map((cat)=> (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
            }
          </TextField>
          {/* Select the difficulty for trivia quizzes */}
          <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
          >
              <MenuItem key="Easy" value="easy"> Easy </MenuItem>
              <MenuItem key="Medium" value="medium"> Medium </MenuItem>
              <MenuItem key="Hard" value="hard"> Hard </MenuItem>
          </TextField>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>

        </div>  {/* End Settings Select */}
      </div> {/* End settings*/}
    </div> // End content
  );
};

export default Home;