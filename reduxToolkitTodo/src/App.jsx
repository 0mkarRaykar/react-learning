import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todos from "./component/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>demo text</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
