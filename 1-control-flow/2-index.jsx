import { render } from 'solid-js/web';
import { createSignal, Index } from 'solid-js';

function App() {
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]);

  return (
    <ul>
      <Index each={cats()}>
        {(cat, index) => (
          <li>
            {/* NOTE With <Index />, the signal is the iterable object instead of the index, so the nodes are fixed in position and only their content changes, instead of being moved like in <For />  */}
            <a target="_blank" href={`https://www.youtube.com/watch?v=${cat().id}`}>
              {index + 1}: {cat().name}
            </a>
          </li>
        )}
      </Index>
    </ul>
  );
}

render(() => <App />, document.getElementById('app'));
