import  {useState,  useEffect} from 'react';

const useLocalStorage = (localStorageKey: string, intitialValue: string) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(localStorageKey);
    return storedValue !== null ? storedValue : intitialValue;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue] as const;
}

export default useLocalStorage;

//  ============ Implementation ============

const DummyComponent = () => {
  const [value, setValue] = useLocalStorage('lastVisitedRoute', '/');
  return (
    <div>
      <button onClick={() => setValue('/about')}>Sets localStorage to about</button>
      <button onClick={() => setValue('/contact')}>Sets localStorage to contact</button>
      <h1>{value}</h1>
    </div>
  )
}

