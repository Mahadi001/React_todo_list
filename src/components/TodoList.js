import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
export default class TodoList extends React.Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        todos...
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            togggleComlplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}
