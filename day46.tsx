import React, {
  PropsWithChildren,
  ReactElement,
  useState,
  Children,
} from 'react';

interface AccordianProps extends PropsWithChildren {
  title: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
  id: number;
}

export const AccordianGroup: React.FC<{
  children: ReactElement<AccordianProps> | ReactElement<AccordianProps>[];
}> = ({ children }) => {
  const childrenArr = Children.toArray(
    children
  ) as ReactElement<AccordianProps>[];
  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    childrenArr.reduce((acc: Record<number, boolean>, currVal, currIndex) => {
      acc[currIndex] = false;
      return acc;
    }, {})
  );

  return (
    <ul>
      {childrenArr.map((accordianItem, idx) => {
        // Each child element is cloned and provided id, expanded state, and an onClick function!
        return React.cloneElement(accordianItem, {
          id: idx,
          expanded: expanded[idx],
          onClick: () =>
            setExpanded({
              ...expanded,
              [idx]: !expanded[idx],
            }),
        });
      })}
    </ul>
  );
};

export const Accordian: React.FC<AccordianProps> = ({
  title,
  children,
  expanded,
  onClick,
  id,
}) => {
  return (
    <li>
      <button
        id={`accordian-${id}`}
        onClick={onClick}
        aria-expanded={`${expanded!}`}
        type="button"
        aria-controls={`accordian-${id}-content`}
      >
        {title}
      </button>
      <div
        id={`accordian-${id}-content`}
        role="region"
        aria-aria-labelledby={`accordian-${id}`}
        className={`${expanded && 'accordian-content--active'}`}
      >
        {children}
      </div>
    </li>
  );
};

// Usage
<AccordianGroup>
  <Accordian id={1} title={'My Cool Accordian'} />
  <Accordian id={2} title={'Really Works!'} />
</AccordianGroup>;
