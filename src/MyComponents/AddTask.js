import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export const AddTask = (props) => {
  const [desc, setDesc] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!desc) {
      alert("Please enter a task description.");
    } else {
      props.addNewTask(desc);
      setDesc("");
    }
  };

  return (
    <Container>
      <h4 className="text-center my-4">Add a new Task</h4>
      <Form onSubmit={Submit}>
        <Form.Group className="mb-3">
          <Form.Label>New Task Description</Form.Label>
          <Form.Control
            type="textarea"
            className="w-25"
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add a Task
        </Button>
      </Form>
    </Container>
  );
};
