import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  setInterval(() => {
    // NOTE count() always returns the current value so updating twice will work
    setCount(count() + 1);
    // NOTE extremely intuitive to already get the latest state just after it updates!
    console.log('count after first update', count());
    setCount(count() + 1);
    console.log('count after second update', count());
  }, 1000);

  // NOTE also possible to update it with it's previous value
  // setInterval(() => setCount((prev) => prev + 1), 1000);

  return <div>Count: {count()}</div>;
}

render(() => <Counter />, document.getElementById('app'));
