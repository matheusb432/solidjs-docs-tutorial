import { For } from 'solid-js';
export { useTodosStore } from './store';

// NOTE Refactoring the For loop into a separate component and calling the store directly
export const TodoList = () => {
  const { todos, toggleTodo } = useTodosStore;

  return (
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
  );
};
