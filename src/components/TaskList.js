import React from "react";
import Task from "./Task";

function TaskList({TASKS}) {
  const newTasks= TASKS.map((Tasks)=>{})
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task TASKS= {TASKS} />
    </div>
  );
}

export default TaskList;
