import { render, Dynamic } from 'solid-js/web';
import { createSignal, Switch, Match, For } from 'solid-js';

const RedThing = () => <strong style="color: red">Red Thing</strong>;
const GreenThing = () => <strong style="color: green">Green Thing</strong>;
const BlueThing = () => <strong style="color: blue">Blue Thing</strong>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing,
};

function App() {
  const [selected, setSelected] = createSignal('red');

  return (
    <>
      <select
        value={selected()}
        onInput={(e) => setSelected(e.currentTarget.value)}>
        <For each={Object.keys(options)}>
          {(color) => <option value={color}>{color}</option>}
        </For>
      </select>
      {/* NOTE <Dynamic /> accepts a component function or a string for a native element */}
      <Dynamic component={options[selected()]} />

      {/* NOTE equivalent <Switch /> */}
      {/* <Switch fallback={<BlueThing />}>
        <Match when={selected() === 'red'}>
          <RedThing />
        </Match>
        <Match when={selected() === 'green'}>
          <GreenThing />
        </Match>
      </Switch> */}
    </>
  );
}

render(() => <App />, document.getElementById('app'));
