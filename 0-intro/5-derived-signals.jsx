import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);
  // NOTE derived signals are functions that run when their dependencies change
  const doubleCount = () => count() * 2;

  setInterval(() => setCount(count() + 1), 1000);

  return (
    <>
      <p>Count: {count()}</p>
      <p>Double: {doubleCount()}</p>
    </>
  );
}

render(() => <Counter />, document.getElementById('app'));
