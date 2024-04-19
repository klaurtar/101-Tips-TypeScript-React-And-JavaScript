import React from 'react';

interface DefinitionProps {
  msg: string;
}

// React.FC with props
const DefinitionOne: React.FC<DefinitionProps> = ({ msg }) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

// Destructure Props with inline typing
const DefinitionTwo = ({ msg }: DefinitionProps) => {
  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

// Define props directly on props object
const DefinitionThree = (props: { msg: string }) => {
  return (
    <div>
      <p>{props.msg}</p>
    </div>
  );
};
