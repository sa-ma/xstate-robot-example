export const fetchTodo = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((todo) => todo);
};
