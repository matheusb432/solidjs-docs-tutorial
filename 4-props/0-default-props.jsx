import { render } from 'solid-js/web';
import { createSignal, mergeProps } from 'solid-js';

export function Greeting(props) {
  // NOTE Setting default values for greeting and name
  // NOTE Props in solid should not be destructured as this can cause them to lose reactivity, instead use mergeProps
  const merged = mergeProps({ greeting: 'Hi', name: 'John' }, props);

  return (
    <h3>
      {merged.greeting} {merged.name}
    </h3>
  );
}

function App() {
  const [name, setName] = createSignal();

  return (
    <>
      <Greeting greeting="Hello" />
      <Greeting name="Jeremy" />
      <Greeting name={name()} />
      <button onClick={() => setName('Jarod')}>Set Name</button>
    </>
  );
}

render(() => <App />, document.getElementById('app'));
