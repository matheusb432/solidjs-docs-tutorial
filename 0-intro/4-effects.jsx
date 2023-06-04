import { render } from 'solid-js/web';
import { createSignal, createEffect } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    // NOTE dependencies are automatically tracked in Solid
    console.log(`Count => ${count()}`);
  });

  return <button onClick={() => setCount((prev) => prev + 1)}>Click Me</button>;
}

render(() => <Counter />, document.getElementById('app'));
