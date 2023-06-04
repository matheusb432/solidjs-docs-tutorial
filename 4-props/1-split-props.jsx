import { render } from 'solid-js/web';
import { createSignal, splitProps } from 'solid-js';

export default function Greeting(props) {
  // NOTE this will NOT work, as the destructuring will cause the props to lose reactivity
  //   const { greeting, name, ...others } = props;
  // NOTE Instead use splitProps to split the props into two arrays, one with local props and one with the rest
  const [local, others] = splitProps(props, ['greeting', 'name']);
  return (
    <h3 {...others}>
      {local.greeting} {local.name}
    </h3>
  );
}

function App() {
  const [name, setName] = createSignal('Jakob');

  return (
    <>
      <Greeting greeting="Yo" name={name()} style="color: teal;" />
      <button
        onClick={() => setName((n) => (n === 'Jakob' ? 'Jarod' : 'Jakob'))}>
        Switch Name
      </button>
    </>
  );
}

render(() => <App />, document.getElementById('app'));
