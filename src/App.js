import "./App.css";
import { Header } from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTask } from "./MyComponents/AddTask";
import { About } from "./MyComponents/About";
import { Signup } from "./MyComponents/Signup";
import { SignIn } from "./MyComponents/SignIn";
import { Dashboard } from "./MyComponents/Dashboard";
import { Home } from "./MyComponents/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, React , createContext} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

export const ClickContext = createContext();

function App() {

  let initTodo;
  localStorage.getItem("todos") === null
    ? (initTodo = [])
    : (initTodo = JSON.parse(localStorage.getItem("todos")));

  const [status, setStatus] = useState({
    loggedInStatus: "NOT_LOGGED_IN", 
    user: {} 
  });
  
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

  const componentDidMount = () => {
    checkLoginStatus();
  }

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && status.loggedInStatus === "NOT_LOGGED_IN") {
          setStatus({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (!response.data.logged_in & (status.loggedInStatus === "LOGGED_IN")) {
          setStatus({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  const handleLogout = () => {
    setStatus({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  const handleLogin = (data) => {
    setStatus({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  return (
    <>
      <BrowserRouter>
        <Header title="Todos List" />
        <Routes>
          <Route
            exact path="/tasks"
            element={
              <>
                <AddTask addNewTask={addNewTask} />
                <ClickContext.Provider value={{onDelete, onComplete}}>
                  <Todos todos={todos}/>
                </ClickContext.Provider>
              </>
            }
          />
          <Route exact path="/" element={<Home handleLogin={handleLogin} loggedInStatus={status.loggedInStatus} />} />
          <Route exact path="/signin" element={<SignIn handleLogin={handleLogin} />} />
          <Route exact path="/signup" element={<Signup handleLogout={handleLogout} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/dashboard" element={<Dashboard loggedInStatus={status.loggedInStatus} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
