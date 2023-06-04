import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

function App() {
  const [current, setCurrent] = createSignal('foo');

  return (
    <>
      {/* NOTE equivalent */}
      {/* <button
  class={current() === 'foo' ? 'selected' : ''}
  onClick={() => setCurrent('foo')}
>foo</button> */}
      {/* NOTE classList conditionally applies css classes */}
      <button
        classList={{ selected: current() === 'foo' }}
        onClick={() => setCurrent('foo')}>
        foo
      </button>
      <button
        classList={{ selected: current() === 'bar' }}
        onClick={() => setCurrent('bar')}>
        bar
      </button>
      <button
        classList={{ selected: current() === 'baz' }}
        onClick={() => setCurrent('baz')}>
        baz
      </button>
    </>
  );
}

render(() => <App />, document.getElementById('app'));
