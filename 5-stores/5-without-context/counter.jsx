import { createSignal, createMemo, createRoot } from 'solid-js';

function createCounter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const doubleCount = createMemo(() => count() * 2);
  return { count, doubleCount, increment };
}

// NOTE Exporting a function that creates the counter store
export default createRoot(createCounter);
