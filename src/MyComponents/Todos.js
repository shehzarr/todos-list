import React from "react";
import { Container } from "react-bootstrap";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div>
      <Container>
        <h3 className="text-center mt-3">Todos List</h3>
        {props.todos.map((item, index) => {
          return (
            <TodoItem
              item={item}
              index={index}
              key={item.id}
              onDelete={props.onDelete}
              onComplete={props.onComplete}
            />
          );
        })}
      </Container>
    </div>
  );
};
