import { render } from 'solid-js/web';
export { useTodosStore } from './store';
import { TodoList } from './TodoList';

const App = () => {
  let input;
  const { addTodo } = useTodosStore();

  function onAddTodo(e) {
    if (!input.value.trim()) return;
    addTodo(input.value);
    input.value = '';
  }

  return (
    <>
      <div>
        <input ref={input} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
      <TodoList />
    </>
  );
};

render(App, document.getElementById('app'));
