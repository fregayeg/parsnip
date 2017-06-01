import React from 'react';
import Task from '../components/Task';

export default function TaskList(props) {
  return (
    <div className="task-list">
      <div className="task-list-title">
        <strong>{props.status}</strong>
      </div>
      {props.tasks.map(task => (
        <Task key={task.id} task={task} onStatusChange={props.onStatusChange} />
      ))}
    </div>
  );
}