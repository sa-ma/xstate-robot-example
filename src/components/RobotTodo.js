import React from 'react';
import { useMachine } from 'react-robot';
import { robotMachine } from '../machines/robotMachine';

function RobotTodo() {
  const [current, send] = useMachine(robotMachine);
  const { todo } = current.context;

  return (
    <div>
      <button onClick={() => send('CLICK')}>Fetch Todo Robot</button>
      {current.name === 'loading' && <p>loading...</p>}
      {current.name === 'success' && (
        <p key={todo.id}>
          {todo.title} <span> {todo.completed} </span>
        </p>
      )}
      {current.name === 'error' && <p>An error occured</p>}
    </div>
  );
}

export default RobotTodo;
