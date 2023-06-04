import { render } from 'solid-js/web';
import { createSignal, batch } from 'solid-js';

const App = () => {
  const [firstName, setFirstName] = createSignal('John');
  const [lastName, setLastName] = createSignal('Smith');

  // NOTE This derived state only runs once if the state updates are batched, else it runs twice
  const fullName = () => {
    console.log('Running FullName');
    return `${firstName()} ${lastName()}`;
  };

  const updateNames = () => {
    console.log('Button Clicked');
    // NOTE Batch will only update the DOM once
    batch(() => {
      setFirstName(firstName() + 'n');
      setLastName(lastName() + '!');
    });

    // NOTE Equivalent but a bit less performant since the DOM will update twice
    // setFirstName(firstName() + 'n');
    // setLastName(lastName() + '!');
  };

  return <button onClick={updateNames}>My name is {fullName()}</button>;
};

render(App, document.getElementById('app'));
