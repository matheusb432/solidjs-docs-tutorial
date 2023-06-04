import { createStore } from 'solid-js/store';

// NOTE creating the store at the top level so the same state can be used by multiple components
const [todos, setTodos] = createStore([]);
let todoId = 0;

export function useTodosStore() {
  const addTodo = (text) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      (todo) => todo.id === id,
      'completed',
      (completed) => !completed
    );
  };

  return { todos, addTodo, toggleTodo };
}
