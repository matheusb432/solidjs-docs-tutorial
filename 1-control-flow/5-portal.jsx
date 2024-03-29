import { render, Portal } from 'solid-js/web';
import './styles.css';

function App() {
  return (
    <div class="app-container">
      <p>Just some text inside a div that has a restricted size.</p>
      {/* NOTE By default, the <Portal /> children will be rendered in a <div> in the document.body */}
      <Portal>
        <div class="popup">
          <h1>Popup</h1>
          <p>Some text you might need for something or other.</p>
        </div>
      </Portal>
    </div>
  );
}

render(() => <App />, document.getElementById('app'));
