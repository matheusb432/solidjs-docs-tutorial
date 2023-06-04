import { render } from 'solid-js/web';
import { createSignal, For } from 'solid-js';

function App() {
  const [cats, setCats] = createSignal([
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ]);

  return (
    <ul>
      {/* NOTE The <For> component is the best way to loop over an array of objects. As the array changes, <For> updates or moves items in the DOM rather than recreating them */}
      <For each={cats()}>
        {(cat, index) => {
          return (
            <li>
              <a
                target="_blank"
                href={`https://www.youtube.com/watch?v=${cat.id}`}>
                {/* NOTE  the index is a signal.  */}
                {index() + 1}: {cat.name}
              </a>
            </li>
          );
        }}
      </For>
    </ul>
  );
}

render(() => <App />, document.getElementById('app'));
