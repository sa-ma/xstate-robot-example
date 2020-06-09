import { Machine, assign } from 'xstate';
import { fetchTodo } from '../fetchTodo';

export const xstateMachine = Machine({
  id: 'clickButton',
  initial: 'ready',
  context: {
    todo: null,
  },
  states: {
    ready: {
      on: {
        CLICK: 'loading',
      },
    },
    loading: {
      invoke: {
        id: 'fetch-todo',
        src: fetchTodo,
        onDone: {
          target: 'success',
          actions: assign({
            todo: (context, event) => event.data,
          }),
        },
        onError: 'error',
      },
    },
    success: {
      on: {
        CLICK: 'loading',
      },
    },
    error: {
      on: {
        CLICK: 'loading',
      },
    },
  },
});
