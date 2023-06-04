import { render } from 'solid-js/web';
import { createSignal, Show, Switch, Match } from 'solid-js';

function App() {
  const [x, setX] = createSignal(7);

  return (
    <>
      <button onClick={() => setX((prev) => prev + 1)}>Inc</button>
      <button onClick={() => setX((prev) => prev - 1)}>Dec</button>

      {/* NOTE The fallback would be the `default` equivalent */}
      <Switch fallback={<p>{x()} is between 5 and 10</p>}>
        {/* NOTE Only the first <Match /> statement with it's expression returning true will render  */}
        <Match when={x() > 10}>
          <p>{x()} is greater than 10</p>
        </Match>
        <Match when={5 > x()}>
          <p>{x()} is less than 5</p>
        </Match>
      </Switch>

      {/* NOTE Equivalent with show */}
      {/* <Show
        when={x() > 10}
        fallback={
          <Show when={5 > x()} fallback={<p>{x()} is between 5 and 10</p>}>
            <p>{x()} is less than 5</p>
          </Show>
        }>
        <p>{x()} is greater than 10</p>
      </Show> */}
    </>
  );
}

render(() => <App />, document.getElementById('app'));
