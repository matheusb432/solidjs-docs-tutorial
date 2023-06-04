import { render } from 'solid-js/web';

export default function Info(props) {
  return (
    <p>
      The <code>{props.name}</code> package is {props.speed} fast. Download version {props.version}{' '}
      from <a href={`https://www.npmjs.com/package/${props.name}`}>npm</a> and{' '}
      <a href={props.website}>learn more here</a>
    </p>
  );
}

const pkg = {
  name: 'solid-js',
  version: 1,
  speed: '⚡️',
  website: 'https://solidjs.com',
};

function App() {
  return (
    // NOTE Spreading props
    <Info {...pkg} />
  );
}

render(() => <App />, document.getElementById('app'));
