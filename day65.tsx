import React, { useState, useEffect } from 'react';

interface Dimensions {
  height: number;
  width: number;
}

const WindowDimensionsProvider: React.FC<{
  children: (windowDimensions: Dimensions) => React.ReactNode;
}> = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return children(dimensions);
};

export default WindowDimensionsProvider;

// =========== Implementation ===========

const ShowDimensions: React.FC = () => {
  return (
    <WindowDimensionsProvider>
      {(dimensions) => (
        <div>
          My window dimension's are {dimensions.height} by {dimensions.width}
        </div>
      )}
    </WindowDimensionsProvider>
  );
};
