import { render } from 'solid-js/web';
import { createSignal, Show } from 'solid-js';

function App() {
  const [loggedIn, setLoggedIn] = createSignal(false);
  const toggle = () => setLoggedIn(!loggedIn());

  return (
    <>
      <p>Logged In = {loggedIn().toString()}</p>
      {/* // NOTE <Show /> is the conditional control flow */}
      <Show when={loggedIn()} fallback={<button onClick={toggle}>Log in</button>}>
        <button onClick={toggle}>Log out</button>
      </Show>
    </>
  );
}

render(() => <App />, document.getElementById('app'));
