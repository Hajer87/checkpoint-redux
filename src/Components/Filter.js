import React from "react";
import { Button } from "react-bootstrap";
import "../styles/FilterStyle.css";

function Filter({ setStatus }) {
  return (
    <div className="filter_container">
       
      <Button 
      style={{ backgroundColor :'indigo'}}
      variant="primary" 
      onClick={() => setStatus("ALL")}>
        All Tasks
      </Button>{" "}
      <Button 
      style={{ backgroundColor :'indigo'}}
      variant="secondary" 
      onClick={() => setStatus("DONE")}>
        Done
      </Button>{" "}
      <Button
      style={{ backgroundColor :'indigo'}}
      variant="success" 
      onClick={() => setStatus("UNDONE")}>
        Undone
      </Button>{" "}
    </div>
  );
}

export default Filter;
