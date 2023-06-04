import { createStore } from 'solid-js/store';
import { createRoot } from 'solid-js';

function createTodosStore() {
  const [todos, setTodos] = createStore([]);
  let todoId = 0;

  const addTodo = (text) => {
    setTodos([...todos, { id: ++todoId, text: text + ' from store!', completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      (todo) => todo.id === id,
      'completed',
      (completed) => !completed,
    );
  };

  return { todos, addTodo, toggleTodo };
}

// NOTE Exporting the store as a root store so it's state can be accessed from any component
export const useTodosStore = createRoot(createTodosStore);
