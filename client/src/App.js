import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";
import questionsArray from "./constants/questionsArray";
import Questions from "./components/Questions";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Container, Grid,} from 'semantic-ui-react'
import LogIn from "./components/login";
import Register from "./components/register";
import Auth from "./utils/auth";



function App() {
  let [questions, setQuestions] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [questionAnswer, setQuestionAnswer] = useState({});

  useEffect(() => {
    setQuestions(questionsArray);
    setQuestionAnswer(questionsArray[0]);
  }, []);

  let handleChangeInput = (e) => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value,
    });
  };

  let nextQuestion = (e) => {
    e.preventDefault();
    questions.map((question) => {
      if (question.resumeFieldId === questionAnswer.resumeFieldId) {
        setAnswers([
          ...answers,
          { ...question, answer: questionAnswer.answer },
        ]);
      }
    });

    questions.map((qa, index) => {
      if (index <= questions.length) {
        if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
          setQuestionAnswer(questions[index + 1]);
        }
      }
    });
  };

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
          <div>
            <AppContext.Provider
                value={{
                  state: {
                    questionAnswer,
                    questions,
                    answers,
                  },
                  function: {
                    handleChangeInput: handleChangeInput,
                    nextQuestion: nextQuestion,
                  },
                }}
            >
              <div className="App">
                {
                  (
                      <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                          <Toolbar>
                            <Typography variant="h4" component="div" textAlign="center"  sx={{ flexGrow: 1 }}>
                              Resume Builder
                            </Typography>
                            <Button href="/" onClick={() => Auth.logout()} color="inherit">Logout</Button>
                          </Toolbar>
                        </AppBar>
                      </Box>
                  )
                }
                <Questions />
              </div>
            </AppContext.Provider>

          </div>
      );
    } else {
      return (
          <Container>
            <Grid columns={2} divided >
              <Grid.Row>
                <Grid.Column>
                  <h1>Login</h1>
                  <LogIn/>
                </Grid.Column>
                <Grid.Column>
                  <h1 >Register</h1>
                  <Register/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
      );
    }
  }

  return (
      <header className="flex-row px-1">
        <nav>
          {showNavigation()}
        </nav>
      </header>
  );

}

export default App;