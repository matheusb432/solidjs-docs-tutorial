import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  // NOTE also possible to update it with it's previous value
  setInterval(() => setCount((prev) => prev + 1), 1000);
  // NOTE updating the signal with it's current value
  //   setInterval(() => setCount(count() + 1), 1000);

  return <div>Count: {count()}</div>;
}

render(() => <Counter />, document.getElementById('app'));
