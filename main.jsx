import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import AllJobsPage from './pages/AllJobsPage.jsx';
import TipOfTheWeekPage from './pages/TipOfTheWeekPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/all-jobs",
    element: <AllJobsPage />,
  },
  {
    path: "/tip-of-the-week",
    element: <TipOfTheWeekPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);