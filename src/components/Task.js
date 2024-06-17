import React from "react";

function Task({TASKS}) {
  return (
    <div className="task">
      <div className="label">{TASKS.category}</div>
      <div className="text">{TASKS.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
