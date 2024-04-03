import React, { useState } from 'react';

const WriteToFile: React.FC = () => {
  const [fetchCount, setFetchCount] = useState(0);

  const fetchData = async () => {
    let file;
    if (fetchCount < 5) {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();

        file = await openFile(data);

        throw new Error('Oops! Something went wrong...');
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setFetchCount((prevCount) => prevCount + 1);

        if (file) {
          await closeFile();
        }
      }
    }
  };

  const openFile = async (data: any[]) => {
    console.log('Opening file...', data);
    return 'Writing data to file...';
  };

  const closeFile = async () => {
    console.log('Closing file...');
    return 'file closed...';
  };

  return (
    <div>
      <h1>Fetch count: {fetchCount}</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default WriteToFile;
