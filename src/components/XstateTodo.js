import React from 'react';
import { useMachine } from '@xstate/react';
import { xstateMachine } from '../machines/xstateMachine';

function XstateTodo() {
  const [current, send] = useMachine(xstateMachine);
  const { todo } = current.context;
  console.log(typeof current);
  return (
    <div style={{ margin: '4rem 0' }}>
      <button onClick={() => send('CLICK')}>Fetch Todo XState</button>
      {current.matches('loading') && <p>loading...</p>}
      {current.matches('success') && (
        <p key={todo.id}>
          {todo.title} <span> {todo.completed} </span>
        </p>
      )}
      {current.matches('error') && <p>An error occured</p>}
    </div>
  );
}

export default XstateTodo;
