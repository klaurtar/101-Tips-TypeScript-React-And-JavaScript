import React, { useRef, useEffect } from 'react';

function usePrevious<T>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// ========== Implementation ==========

interface AIInfo {
  status: 'failure' | 'sleep' | 'processing';
}

interface ArtificialIntelligenceProps {
  aiStuff: AIInfo;
}

const ArtificialIntelligenceComponent: React.FC<
  ArtificialIntelligenceProps
> = ({ aiStuff }) => {
  const prevAiStuff = usePrevious<AIInfo>(aiStuff);

  useEffect(() => {
    if (prevAiStuff?.status === 'failure' && aiStuff.status === 'processing') {
      // Do something
    }
  }, [aiStuff]);

  return <div>Advanced Artificial Intelligence</div>;
};

export default ArtificialIntelligenceComponent;
