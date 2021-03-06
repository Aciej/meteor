import React, { Component } from 'react';

import Task from './Task';

// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, text: 'This is task 1' },
        { id: 2, text: 'This is task 2' },
        { id: 3, text: 'This is task 3' },
      ],
    };
  }
  renderTasks() {
    return this.state.tasks.map(task => (
      <Task key={task.id} task={task} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}
