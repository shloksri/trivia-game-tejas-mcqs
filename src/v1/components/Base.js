import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import data from "./data";

const Base = () => {
  const [allQuestions, setAllQuestions] = useState();

  useEffect(() => {
    setAllQuestions(data);
  }, []);

  return (
    // <h1>It is working</h1>
    <div className="centered">
      <h1>Here are the questions</h1>

      {allQuestions &&
        allQuestions.map((item, index) => {
          return (
            <div key={index}>
              <p className="questionTitle">
                <strong> Q{item.num}: &nbsp;</strong>
                {item.question}
              </p>
              <p>
                <strong>Option A:</strong>
                &nbsp;{item.a}
              </p>
              <p>
                <strong>Option B:</strong>
                &nbsp;{item.b}
              </p>
              <p>
                <strong>Option C:</strong>
                &nbsp;{item.c}
              </p>
              <p>
                <strong>Option D:</strong>
                &nbsp;{item.d}
              </p>
              <p>
                <strong> Answer: </strong>
                {item.answer} - {item.a}
              </p>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

// const getData = () => {
//   fetch()
// };
export default Base;
