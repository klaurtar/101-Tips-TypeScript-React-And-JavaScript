import React, { useState } from 'react';

// A non-performant child component
const NonPerformantComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  // A heavy computation that will be recalculated on every render
  const heavyComputation = () => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += Math.random();
    }
    return result;
  };

  return (
    <div>
      <h2>Non-Performant Component</h2>
      <p>Computation result: {heavyComputation()}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

// Parent component that receives the non-performant component as children
const ParentComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [parentCount, setParentCount] = useState(0);

  return (
    <div>
      <h1>Parent Component Count: {parentCount}</h1>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Parent Button
      </button>
      {children}
    </div>
  );
};

// App component that wraps everything
const App: React.FC = () => {
  return (
    <ParentComponent>
      <NonPerformantComponent />
    </ParentComponent>
  );
};

export default App;
