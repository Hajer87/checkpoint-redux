import React from "react";
import Task from "./Task";
import "../styles/tasksList.css";
import Filter from "./Filter";
import { useState } from "react";
import { useSelector } from "react-redux";

function TasksList() {
  const tasksList = useSelector((state) => state);

  const [status, setStatus] = useState("ALL");
  return (
    <div>
      <Filter setStatus={setStatus} />
   
      <div className='tasks_container'>
        {status === "DONE"
          ? tasksList
              .filter((task) => {
                return task.completed === true;
              })
              .map((task, index) => {
                return <Task task={task} key={index} />;
              })
          : status === "UNDONE"
          ? tasksList
              .filter((task) => {
                return task.completed === false;
              })
              .map((task, index) => {
                return <Task task={task} key={index}/>;
              })
          : tasksList.map((task, index) => <Task task={task} key={index}/>)}
      </div>
    </div>
  );
}

export default TasksList;
