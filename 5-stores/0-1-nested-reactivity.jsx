import { render } from 'solid-js/web';
import { For, createSignal } from 'solid-js';

// NOTE The entire state can be easily moved out of the component and into a function like so
// NOTE This is a very simple example, but it can be scaled up to handle more complex state
function createTodosSignal() {
  const [todos, setTodos] = createSignal([]);
  let todoId = 0;

  const addTodo = (text) => {
    const [completed, setCompleted] = createSignal(false);
    setTodos([
      ...todos(),
      { id: ++todoId, text: text + ' from store!', completed, setCompleted },
    ]);
  };
  const toggleTodo = (id) => {
    const todo = todos().find((t) => t.id === id);
    if (todo) todo.setCompleted(!todo.completed());
  };

  // NOTE by not passing setTodos, only the exposed functions can change the state in the view
  return { todos, addTodo, toggleTodo };
}

const App = () => {
  let input;
  // NOTE Calling the function to get the state
  const { todos, addTodo, toggleTodo } = createTodosSignal();

  return (
    <>
      <div>
        <input ref={input} />
        <button
          onClick={(e) => {
            if (!input.value.trim()) return;
            addTodo(input.value);
            input.value = '';
          }}>
          Add Todo
        </button>
      </div>
      <For each={todos()}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed()}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  'text-decoration': todo.completed() ? 'line-through' : 'none',
                }}>
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
