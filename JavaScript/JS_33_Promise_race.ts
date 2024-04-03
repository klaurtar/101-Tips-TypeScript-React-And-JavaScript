import React from 'react';

const PromiseRace: React.FC = () => {
  const timeoutPromise = (ms: number, msg: string): Promise<void> => {
    return new Promise((_, reject) => {
      const timer = setTimeout(() => {
        reject(msg);
      }, ms);
      return () => clearTimeout(timer);
    });
  };

  const fetchDataWithRace = (url: string, ms: number) => {
    return Promise.race([
      fetch(url),
      timeoutPromise(ms, 'The request took too long!'),
    ]);
  };

  const handleClick = async () => {
    try {
      const response = await fetchDataWithRace(
        'https://jsonplaceholder.typicode.com/posts',
        25
      );
      const data = await response!.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Let's see who wins...</button>
    </div>
  );
};

export default PromiseRace;
