import { render } from 'solid-js/web';
import { createSignal, createEffect, untrack } from 'solid-js';

const App = () => {
  const [a, setA] = createSignal(1);
  const [b, setB] = createSignal(1);

  createEffect(() => {
    // NOTE Untrack will prevent the effect from running again if the value of b changes, but will still return the value of b
    console.log(a(), untrack(b));
    // console.log(a(), b());
  });

  return (
    <>
      <button onClick={() => setA(a() + 1)}>Increment A</button>
      <button onClick={() => setB(b() + 1)}>Increment B</button>
    </>
  );
};

render(App, document.getElementById('app'));
