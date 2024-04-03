import React, { PropsWithChildren } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const PreLoadedImage: React.FC<
  PropsWithChildren<{
    preloadImagePath: `assets/${string}`;
  }>
> = ({ preloadImagePath, children }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="preload" as="image" href={preloadImagePath} />
        </Helmet>
      </HelmetProvider>
      {/* Your component using assets/example-image goes here */}
      {children}
    </>
  );
};

// ================ Implementation ================

<PreLoadedImage preloadImagePath="assets/example-image.webp">
  <img src="assets/example-image.webp" alt="A beautiful pre loaded cat" />
</PreLoadedImage>;
