import React, { Component } from "react";
import Navheader from "../Naviagation/NavHeader";
import Aux from "../Auxiliary/Auxillary";
import classes from "./Layout.module.css";
import List from "../List/List";

class layout extends Component {
  state = {
    title: "",
    description: "",
    todolist: [],
  };

  button = false;

  changeTitleHandler = (event) => {
    this.setState({ title: event.target.value });
  };
  changeDescriptionHandler = (event2) => {
    this.setState({ description: event2.target.value });
  };

  todoSumbitHandler = () => {
    const title = this.state.title;
    const desc = this.state.description;

    const newlist = this.state.todolist;
    const id = Math.floor(Math.random() * 100);
    const newobj = { title: title, description: desc, id: id };
    newlist.push(newobj);
    this.setState({ todolist: newlist });
    this.setState({ title: "", description: "" });
    console.log(this.state.todolist);
    this.button = false;
  };

  todoHandler = () => {
    this.todoSumbitHandler();
  };

  RemoveHandler = (event) => {
    const id = event.target.value;
    console.log(id);

    const todo = this.state.todolist;
    const newlist = todo.filter((item) => {
      return item.id != id;
    });
    this.setState({ todolist: newlist });
    console.log(newlist);
  };

  render() {
    let error = null;
    let list = this.state.todolist.map((item, i) => (
      <List
        key={item.id}
        value={item.id}
        title={item.title}
        description={item.description}
        remove={(event) => this.RemoveHandler(event)}
      />
    ));

    if (list.length == 0) {
      list = <div className={classes.Todo}>Please Enter Your Todo's</div>;
    } else {
    }

    if (this.state.description.length >= 10 && this.state.title.length >= 1) {
      this.button = true;
    }

    if (
      this.state.description.length >= 1 &&
      this.state.description.length < 10
    ) {
      this.button = false;
      error = <div>Enter atleast 10 characters in description and a title</div>;
    }

    return (
      <Aux>
        <div className={classes.Layout}>
          <h2>My Todos</h2>
          <Navheader
            title={this.state.title}
            desc={this.state.description}
            storetitle={(event) => this.changeTitleHandler(event)}
            storedesc={(event2) => this.changeDescriptionHandler(event2)}
            click={() => this.todoHandler()}
            button={this.button}
          />
          <main>{error}</main>
          <aside>{list}</aside>
        </div>
      </Aux>
    );
  }
}

// ADD LIST FUNCTIONALITY

export default layout;
