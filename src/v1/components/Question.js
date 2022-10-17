// format for questions
/**
 * question line with Question number passed as props
 * 4 options with radio buttons
 * choose your answer
 * small notice that you can't go back, on every page
 *
 * How will it be fetched?
 * Receive a prop with the question ID or something like that.

 * 
 * 
 * Props
 * 1. Q. Number
 * 2. question 
 * 
 * 
 * IDEA 1: After all answers, add something in 4th question like - struggling to get answers, let's see if you have a Surprsie here in this button.
 * Then we can create a button with either a surprise answer or a dummy April fool.
 */

import React, { useEffect } from "react";

const Question = ({
  item,
  increaseScore,
  selectedOption,
  changOption,
  handleSubmit,
  setThisAnswer,
}) => {
  return (
    <div>
      <p className="questionTitle">
        <strong> Q{item.num}: &nbsp;</strong>
        {item.question}
      </p>
      <br />
      <p>Selected Option: {selectedOption}</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="radio" value="a" checked={selectedOption === "a"} onChange={changOption} />
          <strong>Option A:</strong>
          &nbsp;{item.a}
        </label>
        <br />
        <label>
          <input type="radio" value="b" checked={selectedOption === "b"} onChange={changOption} />
          <strong>Option B:</strong>
          &nbsp;{item.b}
        </label>
        <br />
        <label>
          <input type="radio" value="c" checked={selectedOption === "c"} onChange={changOption} />
          <strong>Option C:</strong>
          &nbsp;{item.c}
        </label>
        <br />
        <label>
          <input type="radio" value="d" checked={selectedOption === "d"} onChange={changOption} />
          <strong>Option D:</strong>
          &nbsp;{item.d}
        </label>
        <br />
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Question;
