import React, { useState } from 'react';

interface AccordionProps {
  title: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
  id?: number;
  active?: boolean;
}

const Accordion: React.FC<{
  children: React.ReactElement<AccordionProps> | React.ReactElement<AccordionProps>[]
}> = ({ children }) => {
  // convert children to array to ensure children is typeof array
  const childrenArr = React.Children.toArray(children) as React.ReactElement<AccordionProps>[];

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>(
    childrenArr.reduce((acc, currVal, currIndex) => {
      if (currVal.props.active) {
        acc[currIndex] = true;
      } else {
        acc[currIndex] = false;
      }
      return acc;
    }, {})
  )

  return (
    // Accordion HTML here
  );
}

export default Accordion;