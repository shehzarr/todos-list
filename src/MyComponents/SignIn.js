import React, {useState} from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

export const SignIn = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
      axios
        .post(
          "http://localhost:3001/sessions",
          {
            user: {
              email: email,
              password: password
            }
          },
          { withCredentials: true }
        )
        .then(response => {
          if (response.data.logged_in) {
            props.handleSuccessfulAuth(response.data);
          }
        })
        .catch(error => {
          console.log("login error", error);
        });
      event.preventDefault();
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <h1>Sign In Please</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};
