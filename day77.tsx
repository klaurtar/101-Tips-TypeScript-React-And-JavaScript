import React, { useState, useRef, useEffect } from 'react';
import './FadeInSection.css';

const FadeInSection: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setVisible(true);
      });
    });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;

// ./FadeInSection.css

// .fade-in-section {
//   opacity: 0;
//   transform: translateY(20vh);
//   visibility: hidden;
//   transition: opacity 0.2s ease-out, transform 0.6s ease-out;
// }

// .fade-in-section.is-visible {
//   opacity: 1;
//   transform: none;
//   visibility: visible;
// }
