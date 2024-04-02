import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/ContactUs';

const App: React.FC = () => {
  const About = lazy(() => import('./pages/About'));

  const router = createBrowserRouter([
    {
      path: '/about',
      element: (
        <Suspense fallback={<div>Loading About..</div>}>
          <About />
        </Suspense>
      ),
    },
    { path: '/contact', element: <Contact /> },
    { path: '/', element: <Home /> },
  ]);

  return (
    <Suspense fallback={<div>Loading....</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;

// ============ pages/About.tsx ============
import React from 'react';

// A really heavy weight React component
const About: React.FC = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Learn about us!</p>
    </div>
  );
};

export default About;
