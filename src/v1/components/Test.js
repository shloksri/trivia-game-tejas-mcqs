import React from "react";
import { useState, useEffect } from "react";
import "../styles/styles.css";
import data from "./data";
import Question from "./Question";

const Test = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/data")
      .then((res) => res.json())
      .then((result) => setUsers(result))
      .catch(console.log);
  }, []);

  return (
    <div>
      Test here
      <br />
      {users &&
        users.map((item, index) => {
          return <Question key={index} item={item} />;
        })}
    </div>
  );
};

export default Test;
