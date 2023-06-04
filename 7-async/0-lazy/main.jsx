import { render } from 'solid-js/web';
import { lazy } from 'solid-js';

// NOTE Lazy loading components
const Greeting = lazy(async () => {
  // Simulating delay
  await new Promise((r) => setTimeout(r, 1000));
  return import('./greeting');
});

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Greeting name="Jake" />
    </>
  );
}

render(() => <App />, document.getElementById('app'));
