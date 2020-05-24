import React, { Component } from "react";
import { getAll } from "../../api";

class WithConstructor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: []
    };
    this.changes = this.changes.bind(this);
    this.addTask = this.addTask.bind(this);
    getAll().then(({ tasks }) => this.setState({ tasks }));
  }

  changes(event) {
    console.log(event.target.value);
    this.setState({ task: event.target.value });
  }

  addTask() {
    const { task, tasks } = this.state;
    this.setState({
      task: "",
      tasks: [].concat(tasks, task)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        <input onChange={this.changes} value={this.state.task}></input>
        <button onClick={this.addTask}>addicionar</button>
        <ul>
          {this.state.tasks.map(task => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WithConstructor;
