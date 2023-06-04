import { render, For } from 'solid-js/web';
import { createStore, produce } from 'solid-js/store';

const App = () => {
  let input;
  let todoId = 0;
  const [todos, setTodos] = createStore([]);
  const addTodo = (text) => {
    setTodos(
      // NOTE produce is an Immer inspired function that allows us to mutate the state in a function scope
      produce((todos) => {
        // NOTE mutation in the produce function scope is safe
        todos.push({
          id: ++todoId,
          text: text + ' from produce!',
          completed: false,
        });
      })
    );
  };
  const toggleTodo = (id) => {
    setTodos(
      (todo) => todo.id === id,
      produce((todo) => (todo.completed = !todo.completed))
    );
  };

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
      <For each={todos}>
        {(todo) => {
          const { id, text } = todo;
          console.log(`Creating ${text}`);
          return (
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onchange={[toggleTodo, id]}
              />
              <span
                style={{
                  'text-decoration': todo.completed ? 'line-through' : 'none',
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
