import React, {
  PropsWithChildren,
  ReactElement,
  useState,
  Children,
} from 'react';

interface AccordionProps extends PropsWithChildren {
  title: React.ReactNode;
  expanded?: boolean;
  onClick?: () => void;
  id: number;
}

export const AccordionGroup: React.FC<{
  children: ReactElement<AccordionProps> | ReactElement<AccordionProps>[];
}> = ({ children }) => {
  const childrenArr = Children.toArray(
    children
  ) as ReactElement<AccordionProps>[];
  const [expanded, setExpanded] = useState<Record<number, boolean>>(
    childrenArr.reduce((acc: Record<number, boolean>, currVal, currIndex) => {
      acc[currIndex] = false;
      return acc;
    }, {})
  );

  return (
    <ul>
      {childrenArr.map((accordionItem, idx) => {
        // Each child element is cloned and provided id, expanded state, and an onClick function!
        return React.cloneElement(accordionItem, {
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

export const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  expanded,
  onClick,
  id,
}) => {
  return (
    <li>
      <button
        id={`accordion-${id}`}
        onClick={onClick}
        aria-expanded={`${expanded!}`}
        type="button"
        aria-controls={`accordion-${id}-content`}
      >
        {title}
      </button>
      <div
        id={`accordion-${id}-content`}
        role="region"
        aria-aria-labelledby={`accordion-${id}`}
        className={`${expanded && 'accordion-content--active'}`}
      >
        {children}
      </div>
    </li>
  );
};

// Usage
<AccordionGroup>
  <Accordion id={1} title={'My Cool Accordion'} />
  <Accordion id={2} title={'Really Works!'} />
</AccordionGroup>;
