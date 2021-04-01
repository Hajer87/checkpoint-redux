import { Modal, Button } from "react-bootstrap";
import React from "react";
import '../styles/EditModal.css'

import { useDispatch } from "react-redux";
import { useState } from "react";
import { edittask } from "../Actions";

function EditModal({ task, show, handleClose }) {
  const [editDescription, setEditDescription] = useState(task.description);

  const dispatch = useDispatch();

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit </Modal.Title>
        </Modal.Header>
        <input
        className='Modal_input'
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        ></input>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            onClick={() => {
              dispatch(edittask({id:task.id, description: editDescription})); handleClose();
            }}
            variant="primary"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditModal;
