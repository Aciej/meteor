import React, { PropTypes } from 'react';

// Task component - represents a single todo item
const Task = ({ task }) => (
  <li>{task.text}</li>
);

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.shape({ text: {} }).isRequired,
};

export default Task;
