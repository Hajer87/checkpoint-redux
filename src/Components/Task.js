import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { doneTask, removeTask } from "../Actions/index";
import { Form } from "react-bootstrap";
import Edit from "../Components/Edit";
import "../styles/task.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const chechboxClickHandler = ( ) => {
      setChecked(!checked)}
     

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="task_container" style={{ backgroundColor: task.completed ? '#F08080' : null}}>
      <div className="task_description">
        <Form.Check
        className='check'
          type="checkbox"
          id={task.id}
          onClick={() => {return dispatch(doneTask(task.id)),chechboxClickHandler() }}
          checked={task.completed} 
       
        />
        <span
          className="task"
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {" "}
          {task.description}
        </span>
      </div>

      <div>
        <button className="icon" onClick={() => dispatch(removeTask(task.id))}>
          <FaTrash />
        </button>
        <button 
        className="icon"
        onClick={handleShow}>
          <FaEdit />
        </button>
        {show ? (
          <Edit task={task} show={show} handleClose={handleClose} />
        ) : null}
      </div>
    </div>
  );
};

export default Task;

/*import React from "react";


function Task({ task }) {
   

  return (
    <div  >
    
      {task.description}
     
    </div>
  );
}

export default Task;*/
