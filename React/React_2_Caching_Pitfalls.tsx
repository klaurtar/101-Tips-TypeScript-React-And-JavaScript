// useMemo is used here to memoize an expensive calculation
const expensiveCalculation = useMemo(() => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}, []); // Dependency array is empty, so this runs only once

// useCallback is used here to memoize a function
const increment = useCallback(() => {
  setCount(count + 1);
}, [count]); // Dependency array includes 'count', so this updates when 'count' changes
