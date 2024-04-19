import React from 'react';

interface AdminPanelProps {
  metrics: string[];
  data: string;
  KPIs: boolean;
}

const AdminPanel: React.FC<Readonly<AdminPanelProps>> = (props) => {
  // 🚫 Cannot assign to 'metrics' because it is a read-only property.
  props.metrics = ['Ryan', 'Is', 'Coding'];

  return (
    <div className="AdminPanel">
      {props.metrics.map((it) => (
        <span>{it}</span>
      ))}
      <div>{props.data}</div>
    </div>
  );
};

export default AdminPanel;
