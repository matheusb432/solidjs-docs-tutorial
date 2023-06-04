import { render } from 'solid-js/web';
import { For, createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';

// NOTE Achieving nested reactivity is much easier with stores
function createTodosStore() {
  let todoId = 0;
  const [todos, setTodos] = createStore([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: ++todoId, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    // NOTE Store's path syntax with function setters that allow us to take the previous state and return the new state on nested values.
    setTodos(
      // NOTE Filter the todos array to find the todo with the matching id
      (todo) => todo.id === id,
      // NOTE Access the complete property
      'completed',
      // NOTE Toggle the property
      (completed) => !completed,
    );
  };

  // NOTE Equivalent using nested signals
  //   const toggleTodo = (id) => {
  //     const todo = todos().find((t) => t.id === id);
  //     if (todo) todo.setCompleted(!todo.completed());
  //   };

  return { todos, addTodo, toggleTodo };
}

const App = () => {
  let input;
  const { todos, addTodo, toggleTodo } = createTodosStore();

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = '';
          }}
        >
          Add Todo
        </button>
      </div>
      {/* NOTE todos is not a signal, instead it is a readonly store proxy */}
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input type="checkbox" checked={todo.completed} onchange={[toggleTodo, id]} />
              <span
                style={{
                  'text-decoration': todo.completed ? 'line-through' : 'none',
                }}
              >
                {text}
              </span>
            </div>
          );
        }}
      </For>
    </>
  );
};

render(App, document.getElementById('app'));
