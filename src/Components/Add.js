import React from 'react'
import {Form} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../Actions";
import { useState } from "react";
import '../styles/AddStyle.css'


function Add() {
    
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    description: "",
    completed: false,
  });



  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask(newTask));
    setNewTask({ id: uuidv4(), description: "", completed: false });
  };

      return (
           
                
      <Form.Group className='input_container'>
        <Form.Control className="input"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
          size="lg"
          type="text"
          placeholder="Enter New ToDo"
        />
        <button className='add_btn' onClick={handleAddTask}> Add</button>
      </Form.Group>  
            
      )
}

export default Add

 