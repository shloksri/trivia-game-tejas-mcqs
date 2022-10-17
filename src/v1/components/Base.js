import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import data from "./data";
import Question from "./Question";

const Base = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    setAllQuestions(data);
  }, []);

  //for setting up the answer
  const setThisAnswer = (item) => {
    setAnswer(item);
  };

  //for increasing total score
  const increaseScore = () => {
    setScore((prevState) => prevState + 1);
  };

  //for selecting option answer
  const changOption = (event) => {
    setSelectedOption(event.target.value);
  };

  //handling submit

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === answer) {
      increaseScore();
      console.log("answer correct");
    } else {
      console.log("answer incorrect");
    }
  };

  const loadQuestionCard = () => {};

  return (
    // <h1>It is working</h1>
    <div className="centered">
      <h1>Here are the questions</h1>
      <h3 className="sticky">Current Score: {score}</h3>
      {/* Current Answer = {answer} */}
      {allQuestions &&
        allQuestions.map((item, index) => {
          return (
            <Question
              key={index}
              item={item}
              increaseScore={increaseScore}
              selectedOption={selectedOption}
              changOption={changOption}
              handleSubmit={handleSubmit}
            />
          );
        })}
    </div>
  );
};

export default Base;
