import { render } from 'solid-js/web';
import { createSignal, onCleanup } from 'solid-js';

function Counter() {
  const [count, setCount] = createSignal(0);

  const timer = setInterval(() => {
    console.log('running timer...');
    setCount(count() + 1);
  }, 1000);

  // NOTE Will run when the component is unmounted
  onCleanup(() => clearInterval(timer));

  return <div>Count: {count()}</div>;
}

render(() => <Counter />, document.getElementById('app'));
