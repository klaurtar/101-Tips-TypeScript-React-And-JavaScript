import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { AppUpdateProvider } from '../contexts/UpdateApp';
import { LoggedInProvider } from '../contexts/LoggedIn';
import LoggedInOverlay from '../pages/LoggedInOverlay/LoggedInOverlay';
import UpdateOverlay from '../pages/Update/UpdateOverlay';

const AllTheProviders: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppUpdateProvider
        renderUpdate={(data: any, versionNumber: string) => (
          <UpdateOverlay data={data} versionNumber={versionNumber} />
        )}
      >
        <LoggedInProvider renderLoading={() => <LoggedInOverlay />}>
          {children}
        </LoggedInProvider>
      </AppUpdateProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

// ✅ In your component's test import your custom render!
import { render, waitFor, screen } from '../../test-utils';
