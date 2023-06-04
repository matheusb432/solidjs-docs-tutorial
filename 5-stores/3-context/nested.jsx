import { useCounter } from './counter';

export default function Nested() {
  // NOTE Using the useCounter hook to access the counter context state
  const [count, { increment, decrement }] = useCounter();
  return (
    <>
      <div>{count()}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
