import React, { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={this._onSubmit}>
          <input
            value={this.state.term}
            onChange={this._onChange}
            placeholder="Enter Todo"
          />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }

  _onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  _onSubmit = event => {
    //puts on the brakes
    event.preventDefault();
    // console.log("submitted!");
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
}

export default TodoList;
