// @ts-nocheck
import { render } from 'solid-js/web';
import { createSignal, Show, onCleanup } from 'solid-js';
import './style.css';

export function clickOutside(el, accessor) {
  const onClick = (e) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}

function App() {
  const [show, setShow] = createSignal(false);

  return (
    <Show
      when={show()}
      fallback={<button onClick={(e) => setShow(true)}>Open Modal</button>}>
      {/* NOTE Setting the clickOutside directive to run the callback when a click is registered outside of the element */}
      <div class="modal" use:clickOutside={() => setShow(false)}>
        Some Modal
      </div>
    </Show>
  );
}

render(() => <App />, document.getElementById('app'));
