import { useState, memo, useMemo } from 'react';
import Child from './Child';

const MemoChild = memo(Child);

function App() {
  const [count, setCount] = useState<number>(0);
  const myMemoStyle = useMemo(() => ({ height: '20%' }), []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <MemoChild style={myMemoStyle} />
      <Child style={{ height: '20%' }} />
    </>
  );
}

export default App;
