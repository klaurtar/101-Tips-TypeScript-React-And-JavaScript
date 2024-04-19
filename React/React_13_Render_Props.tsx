import React, { createContext, useState, useEffect, useMemo } from 'react';

interface MaintenanceContextProps {
  isUnderMaintenance: boolean;
}

export const MaintenanceContext = createContext<MaintenanceContextProps | null>(
  null
);

export const MaintenanceProvider: React.FC<{
  renderMaintenancePage: () => React.ReactNode;
  children: React.ReactNode;
}> = ({ children, renderMaintenancePage }) => {
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);

  useEffect(() => {
    // Make a call to a database/API/JSON file to check if the site is under maintenance
    setTimeout(() => {
      setIsUnderMaintenance(true);
    }, 3000);
  }, []);

  const contextValue = useMemo(
    () => ({
      isUnderMaintenance,
    }),
    [isUnderMaintenance]
  );

  if (isUnderMaintenance) {
    return renderMaintenancePage();
  }

  return (
    <MaintenanceContext.Provider value={contextValue}>
      {children}
    </MaintenanceContext.Provider>
  );
};

// ============ App.tsx ============
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MaintenanceProvider } from './contexts/Maintenance';
import Home from './pages/Home';
import Contact from './pages/ContactUs';
import About from './pages/About';

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/about',
      element: <About />,
    },
    { path: '/contact', element: <Contact /> },
    { path: '/', element: <Home /> },
  ]);

  return (
    <MaintenanceProvider
      renderMaintenancePage={() => <div>Under Maintenance</div>}
    >
      <RouterProvider router={router} />
    </MaintenanceProvider>
  );
};

export default App;
