import { useCallback, useState } from 'react';

export default async () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
  const set = useCallback((res) => setCounter((c) => c + res), []);
  return { counter, increment, decrement, set };
};
