import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Component/TodoInput/TodoInput";
import TodoList from "./Component/TodoList/TodoList";

import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./Component/TodoInput/TodoInput";

function App() {
  return (
    <div className="App">
      <div className="row">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
