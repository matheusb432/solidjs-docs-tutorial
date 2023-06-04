import { createSignal, For, children, createEffect } from 'solid-js';
import { render } from 'solid-js/web';

export function ColoredList(props) {
  const c = children(() => props.children);
  createEffect(() => c().forEach((item) => (item.style.color = props.color)));
  return <>{c()}</>;
}

function App() {
  const [color, setColor] = createSignal('purple');

  return (
    <>
      <ColoredList color={color()}>
        <For each={['Most', 'Interesting', 'Thing']}>{(item) => <div>{item}</div>}</For>
      </ColoredList>
      <button onClick={() => setColor('teal')}>Set Color</button>
    </>
  );
}

render(() => <App />, document.getElementById('app'));
