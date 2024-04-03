import React, { useState, useEffect } from 'react';
import { FixedSizeList as List } from 'react-window';

const Row: React.FC<{
  index: number;
  style: React.CSSProperties;
}> = ({ index, style }) => (
  <div style={style} onClick={() => alert(`Row ${index} clicked`)}>
    Row {index}
  </div>
);

const VirtualList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const loadItems = async () => {
      // Pretend we are fetching heavy data from an API
      const fetchedItems = new Array(1001)
        .fill(null)
        .map((_, index) => `List item's ${index}`);
      setItems(fetchedItems);
    };

    loadItems();
  }, []);

  return (
    <List height={300} itemCount={items.length} itemSize={50} width={300}>
      {Row}
    </List>
  );
};

export default VirtualList;
