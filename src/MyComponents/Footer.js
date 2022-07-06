import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="bg-dark text-light text-center py-3">
      <Container fluid>
        &copy; {new Date().getFullYear()} Copyright: TodoList.com
      </Container>
    </div>
  );
};
