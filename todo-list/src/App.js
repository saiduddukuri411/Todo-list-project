import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./Component/TodoInput/TodoInput";
import TodoList from "./Component/TodoList/TodoList";

import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./Component/TodoInput/TodoInput";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "Make BreakFast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("hello");
  };
  handleSubmit = (e) => {
    console.log("handle submit");
  };
  clearList = () => {
    console.log("clear List");
  };
  handleEdit = () => {
    console.log("clear List");
  };
  handleDelete = () => {
    console.log("clear List");
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center ">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
