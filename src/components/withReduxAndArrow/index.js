import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { TaskActions } from "../../actions/task";

class WithReduxAndArrow extends Component {
  state = {
    task: ""
  };

  render() {
    const { tasks } = this.props;
    const { task } = this.state;
    console.log(this.props);
    return (
      <div className="todo">
        <form className="todo-form" onSubmit={this.handleSubmit}>
            <h1>Com Redux e Arrow function</h1>
          <input
            className="todo-field"
            onChange={this.handleChange}
            type="text"
            value={task}
          />
          <button className="todo-btn" type="submit">
            Add
          </button>
        </form>
        <table className="todo-table">
          <tbody>
            {tasks.map(task => (
              <tr key={task}>
                <td>{task}</td>
                <td>
                  <button
                    className="todo-table-btn"
                    onClick={() => this.handleRemove(task)}
                    type="button"
                  >
                    Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  handleChange = event => this.setState({ task: event.target.value });

  handleRemove = task => {
    const { remove } = this.props;
    remove(task);
  };

  handleSubmit = event => {
    const { add } = this.props;
    const { task } = this.state;
    event.preventDefault();
    add(task);
    this.setState({ task: "" });
  };
}

const mapStateToProps = state => ({
  tasks: state.taskReducers.tasks
});

const mapDispatchToProps = dispatch => ({
  add: bindActionCreators(TaskActions.add, dispatch),
  remove: bindActionCreators(TaskActions.remove, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(WithReduxAndArrow);
