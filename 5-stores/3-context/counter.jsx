import { createSignal, createContext, useContext } from 'solid-js';

const CounterContext = createContext();

// NOTE Context api in solid
export function CounterProvider(props) {
  const [count, setCount] = createSignal(props.count || 0);
  const counter = [
    count,
    {
      increment() {
        setCount((c) => c + 1);
      },
      decrement() {
        setCount((c) => c - 1);
      },
    },
  ];

  return <CounterContext.Provider value={counter}>{props.children}</CounterContext.Provider>;
}

export function useCounter() {
  return useContext(CounterContext);
}
