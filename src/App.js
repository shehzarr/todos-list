import "./App.css";
import { Header } from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTask } from "./MyComponents/AddTask";
import { About } from "./MyComponents/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, React , createContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ClickContext = createContext();

function App() {
  let initTodo;
  localStorage.getItem("todos") === null
    ? (initTodo = [])
    : (initTodo = JSON.parse(localStorage.getItem("todos")));

  const [todos, setTodos] = useState(initTodo);

  const onComplete = (todo, index) => {
    let newState = [...todos];
    newState[index].completed = !todo.completed;
    setTodos(newState);
  };

  const onDelete = (todo) => {
    setTodos(
      todos.filter((item) => {
        return item !== todo;
      })
    );
  };

  const addNewTask = (description) => {
    let id;
    todos.length === 0 ? (id = 0) : (id = todos.at(-1).id + 1);
    const newTask = {
      id: id,
      todo: description,
      completed: false,
      userId: 1,
    };
    setTodos([...todos, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <BrowserRouter>
        <Header title="Todos List" />
        <Routes>
          <Route
            exact path="/"
            element={
              <>
                <AddTask addNewTask={addNewTask} />
                <ClickContext.Provider value={{onDelete, onComplete}}>
                  <Todos todos={todos}/>
                </ClickContext.Provider>
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
