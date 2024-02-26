import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import axios from 'axios'

export const Signup = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("response", response);
        if (response.data.status === "created") {
          props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {

        console.log("registration error", error);
      });
    event.preventDefault();
  }

  return (
    <Container>
      <div className= "d-flex justify-content-center">
        <Form onSubmit={handleSubmit}>
          <h1>Sign up Please</h1>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  )
}
