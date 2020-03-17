import React from "react";
import Task from "./Task";

function TaskList({ tasks, loading, actions }) {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span>
        <span>cool</span>
        <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div className="list-items">no item</div>;
  }

  return (
    <div className="list-items">
      {tasks.map(task => (
        <Task task={task} {...actions} />
      ))}
    </div>
  );
}

export default TaskList;
