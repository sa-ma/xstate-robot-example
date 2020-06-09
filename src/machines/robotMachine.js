import { createMachine, invoke, reduce, state, transition } from 'robot3';
import { fetchTodo } from '../fetchTodo';

const context = () => ({
  todo: {},
});

export const robotMachine = createMachine(
  {
    ready: state(transition('CLICK', 'loading')),
    loading: invoke(
      fetchTodo,
      transition(
        'done',
        'success',
        reduce((ctx, evt) => ({ ...ctx, todo: evt.data }))
      ),
      transition(
        'error',
        'error',
        reduce((ctx, ev) => ({ ...ctx, error: ev.error }))
      )
    ),
    success: state(transition('CLICK', 'loading')),
    error: state(transition('CLICK', 'loading')),
  },
  context
);
