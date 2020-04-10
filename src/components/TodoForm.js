import React from "react";
import shortid from "shortid";
export default class TodoForm extends React.Component {
  state = {
    text: "",
  };

  handlechange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.state.handlechange}
          placeholder="Add Todos.."
        />
      </form>
    );
  }
}
