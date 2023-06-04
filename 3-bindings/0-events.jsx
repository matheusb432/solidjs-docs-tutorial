import { render } from 'solid-js/web';
import { createSignal } from 'solid-js';

function App() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setPos({
      x: event.clientX,
      y: event.clientY,
    });
  }

  function clickHandler(itemId, event) {
    console.log('clicked', itemId);
  }

  return (
    <>
      {/* NOTE on: syntax is also supported if other casings need to be supported or event delegation is not used */}
      <button on:click={() => console.log('clicked')}>Click me!</button>
      <button onClick={() => console.log('clicked 2')}>Click me 2!</button>
      {/* NOTE Solid also supports passing an array to the event handler to bind a value to the first argument of the event handler. This doesn't use bind or create an additional closure, so it is a highly optimized way of delegating events. */}
      <button onClick={[clickHandler, 3]}>Click me 3!</button>
      <div onMouseMove={handleMouseMove}>
        The mouse position is {pos().x} x {pos().y}
      </div>
    </>
  );
}

render(() => <App />, document.getElementById('app'));
